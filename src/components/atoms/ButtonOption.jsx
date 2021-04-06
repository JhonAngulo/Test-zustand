import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 50px;
  box-sizing: border-box;
  outline: none;
  border:none;
  border-radius: 8px;
  padding: 10px 20px;
  background-color: #22a9af; 
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;

  &:hover{
    background-color: #1e2f43;
  }
`;

const OptionButton = ({ children, eventHandler, name }) => (
  <StyledButton name={name} onClick={eventHandler}>
    {children}
  </StyledButton>
);

export default OptionButton;
