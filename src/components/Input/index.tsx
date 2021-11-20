import { InputHTMLAttributes} from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import { Container, ContainerWrapper, InputElement, TextError } from './styles';

type InputPros = {
  icone?: 'user' | 'lock';
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({error, icone,...rest}: InputPros) {
  return (
    <ContainerWrapper>
      <Container error={!!error}>
        { icone === 'user' && <FiUser /> }
        { icone === 'lock' && <FiLock /> }
        <InputElement
          {...rest}
          />
      </Container>
      { error && <TextError>{error}</TextError>}
    </ContainerWrapper>
  )
}