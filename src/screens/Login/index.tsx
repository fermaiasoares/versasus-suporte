import { useCallback, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Button, 
  Container, 
  FormLogin,
  Link,
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

export function Login() {
  useEffect(() => {
    document.title = `${document.title} - Login`
  }, [])

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const handleSignIn = useCallback((data) => {
    console.log(data);
  }, [])

  return (
    <Container>
      <FormLogin>
        <img src={logoImg} alt="VersaSUS Suporte" />
        <Title>Acesso Restrito</Title>

        <InputControl
          control={control}
          name="login"
          icone="user"
          type="text"
          placeholder="Usuário"
          error={errors.login && errors.login.message}
        />

        <InputControl
          control={control}
          name="password"
          icone="lock"
          type="password"
          placeholder="Senha"
          error={errors.password && errors.password.message}
        />

        <Button onClick={handleSubmit(handleSignIn)}>
          Entrar
        </Button>

        <Link title="Recuperação de senha">Recuperar senha</Link>
      </FormLogin>
    </Container>
  )
}