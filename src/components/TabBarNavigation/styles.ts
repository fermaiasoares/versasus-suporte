import styled from 'styled-components';

export const TabNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;

  background-color: #C6C6C6;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.25);

  padding: 0 20px;
`;

export const TabNavigationItens = styled.div`
  display: flex;
  flex: 1;
`;

export const TabLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 16px;

  &:hover {
    background-color: #004770;
    border-radius: 8px;
    
    & > a {
      color: #f1f1f1;
    }
  }

  &:last-child {
    margin: 0;
  }

  & > a {
    color: #004770;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  & > a:active {
    color: #d36f6f;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const TabUserProfile = styled.div`
  display: flex;

  flex-direction: column;
  
  width: 120px;
  height: 56px;

  align-content: center;
  justify-content: center;
  
  & > button {
    color: #004770;

    display: flex;
    justify-content: space-between;
  }

  & > button:hover {
    background-color: #004770;
    color: #fff;
  }
`;