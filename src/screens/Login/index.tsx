import React, { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import {
  Button, 
  Container, 
  FormLogin,
  Title
} from './styles';

import logoImg from '../../assets/images/logo.png';

import { InputControl } from '../../components/Form/InputControl';

const defaultValues: FieldValues = {
  login: '',
  password: ''
}

const schema = Yup.object().shape({
  login: Yup.string().required('Usuário é obrigatório.'),
  password: Yup.string().required('Senha é obrigatório.')
})

interface IFormLogin {
  login: string;
  password: string;
}

export function Login() {
  const { signIn } = useAuth();

  useEffect(() => {
    document.title = 'VersaSUS Suporte - Login';
  }, [])

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  async function handleSignIn({login: email, password}: IFormLogin) {
    await signIn({ email, password });
  }

  return (
    <Container>
      <FormLogin>
        <img src={logoImg} alt="VersaSUS Suporte" />
        <Title>Acesso Restrito</Title>

        <InputControl
          control={control}
          name="login"
          icone={FiUser}
          type="text"
          placeholder="Usuário"
          error={errors.login && errors.login.message}
        />

        <InputControl
          control={control}
          name="password"
          icone={FiLock}
          type="password"
          placeholder="Senha"
          error={errors.password && errors.password.message}
        />

        <Button onClick={handleSubmit(handleSignIn)}>
          Entrar
        </Button>

        <Link title="Recuperação de senha" to="/">Recuperar senha</Link>
      </FormLogin>
    </Container>
  )
}