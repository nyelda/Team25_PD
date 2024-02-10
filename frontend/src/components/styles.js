import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../colors';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: #A9B388;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #f9efdb;
  font-size: 18px;
`;

export const DifficultyWrapper = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    color: ${palette.accent2};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;

    li {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: ${palette.accent1};
      font-size: 20px;
    }
  }
`;

export const ExerciseCardWrapper = styled.div`
  border: 1px solid #5F6F52;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9efdb;
  color: #5F6F52;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #A9B388;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;