import React, { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';

import { Container } from './styles'

type ButtonProps = {
  title: string,
  icone?: React.ComponentType<IconBaseProps>;
  color?: string; 
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button ({ title, icone: Icon, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      { Icon && <Icon /> }
      {title}
    </Container>
  );
}
