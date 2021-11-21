import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';

import { Container } from './styles'

type ButtonProps = {
  children: ReactNode;
  icone?: React.ComponentType<IconBaseProps>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button ({ children, icone: Icon, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      { Icon && <Icon /> }
      {children}
    </Container>
  );
}
