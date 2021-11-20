import styled, { css } from 'styled-components';

type Props = {
  error: boolean
}

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 16px;

  & + & {
    margin-bottom: 24px;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  flex: 1;
  align-items: center;

  background-color: #ffffff;
  border-radius: 16px;
  border: 2px solid #ffffff;
  height: 56px;
  width: 100%;

  padding: 0 16px;

  & > svg {
    font-size: 20px;
    color: #c6c6c6;
  }

  &:hover {
    border: 2px solid #0078BC;

    & > svg, input {
      color: #0078BC;
    }
  }

  ${({ error }) => error && css`
    border-color: #d36;

    & > svg {
      color: #d36;
    }
  `}
`;

export const InputElement = styled.input.attrs({
  placeholderTextColor: '#c6c6c6',
})`
  display: flex;
  flex: 1;
  font-size: 16px;

  border: none;

  padding: 16px 8px;
`;

export const TextError = styled.div`
  display: flex;

  font-size: 14px;
  margin: 4px 0 -4px;
  color: #d36;
`;
