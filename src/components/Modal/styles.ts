import styled, { css } from 'styled-components';

type Props = {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  z-index: 1000;
  top: 0;

  position: absolute;

  ${({ isOpen }) => isOpen && css`
    display: flex;
  `}

  ${({ isOpen }) => !isOpen && css`
    display: none;
  `}
  
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 100vw;
  height: 100vh;

  padding-top: 40px;

  background-color: rgba(0, 0, 0, 0.5);

  transition: display 0.3s;

  > .modal-content {
    padding: 20px;
    background-color: #f1f1f1 !important;
    border-radius: 8px;

    min-width: 400px;
    max-width: 90%;

    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));

    > button {
      border: none;
      position: absolute;
      right: 14px;
      top: 10px;
      color: #c6c6c6;

      font-size: 14px;
      font-weight: bold;
    }

    > .modal-title {
      display: flex;
      border-bottom: 1px solid #004770;
      background-color: transparent !important;

      > h2 {
        margin-right: 10px;
        font-size: 16px;
        background-color: transparent !important;
        color: #004770;
      }
    }
  }
`;