import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const StyledImg = styled.img`
  height: 40px;
`;

const Logo = () => (
  <StyledImg src={logo} alt="bewe logo" />
);

export default Logo;
