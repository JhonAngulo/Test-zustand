import React from 'react';
import styled from 'styled-components';
import Logo from './atoms/Logo';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <h1>To-Do</h1>
  </StyledHeader>
);

export default Header;
