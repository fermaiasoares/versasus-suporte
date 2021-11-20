import { render } from '@testing-library/react';

import { Input } from './index';

test('Input should be renders', () => {
  const { findByPlaceholderText } = render(<Input placeholder="Digite aqui"/>);

  expect(
    findByPlaceholderText('Digite aqui')
  ).toBeTruthy();
})