import React, { InputHTMLAttributes} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, ContainerWrapper, InputElement, TextError } from './styles';

type InputPros = {
  icone?: React.ComponentType<IconBaseProps>;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({error, icone: Icon,...rest}: InputPros) {
  return (
    <ContainerWrapper>
      <Container error={!!error}>
        { Icon && <Icon /> }
        <InputElement
          {...rest}
          />
      </Container>
      { error && <TextError>{error}</TextError>}
    </ContainerWrapper>
  )
}