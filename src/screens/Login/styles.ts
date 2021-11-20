import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #004770;
`

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 320px;
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 24px 20px;

  filter: drop-shadow(0px 19px 10px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.div`
  color: #0078BC;
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  margin: 26px 0;
`;

export const Button = styled.button`
  background-color: #0078BC;
  border: none;
  border-radius: 16px;
  height: 56px;
  width: 100%;

  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 27px;

  &:hover {
    background-color: ${shade(0.1, '#004770')};
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-size: 18px;

  color: #0078BC;
`;
