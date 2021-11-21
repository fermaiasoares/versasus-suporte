import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Control, Controller } from 'react-hook-form';

import { Container } from "./styles";

import { Input } from "../../Input";

type InputProps = {
  control: Control;
  error?: string;
  icone?: React.ComponentType<IconBaseProps>;
  name: string;
  type: 'text' | 'password',
} & InputHTMLAttributes<HTMLInputElement>;

export function InputControl ({ control, name, icone,...rest }: InputProps) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: {onChange, onBlur, value} }) => (
          <Input
            icone={icone}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
      />
    </Container>
  )
}