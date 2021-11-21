import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  width: 100%;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 40px;

  & > hr {
    margin-bottom: 16px;
  }

  & > table {
    padding: 8px;
    background-color: #f1f1f1;
    border-radius: 16px;

    > thead > th {
      border-bottom: 1px solid #fff;
      padding: 8px;
      color: #004770;
    }

    & > tbody {
      > tr:hover {
        background-color: ${shade(0.1, '#f1f1f1')};
        color: #004770;
      }

      > tr > td {
        padding: 8px;
      }

      > tr > td.center {
        text-align: center;
      }
    } 
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  border-bottom: 3px solid #f1f1f1;

  & > h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #fff;
  }
`;

export const HeaderActions = styled.div`
  & > a {
    text-decoration: none;
  }

  & > a > button { 
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 16px;

    border: none;
    border-radius: 16px;

    background-color: #36BEB6;

    &:hover {
      background-color: ${shade(0.4, '#36BEB6')};
    }

    color: #f1f1f1;

    font-size: 16px;
  }

  & > a > button > svg {
    margin-right: 8px;
    font-size: 24px;
    stroke: #fff;
  }
`;

export const ButtonAction = styled.button`
  padding: 4px;
  border: none;
  border-radius: 4px;
  margin: 0 4px;

  &.show {
    background-color: #004770;

    &:hover {
      background-color: ${shade(0.4, '#004770')};
    }
  }

  &.edit {
    background-color: #36BEB6;

    &:hover {
      background-color: ${shade(0.4, '#36BEB6')};
    }
  }

  &.remove {
    background-color: #d36;

    &:hover {
      background-color: ${shade(0.4, '#d36')};
    }
  }

  & > svg {
    color: #fff;
  }
`;