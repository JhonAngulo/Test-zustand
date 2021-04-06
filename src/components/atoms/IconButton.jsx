import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 2px;
  padding: 2px;
`;

const Input = ({
  name, register, required = false, placeholder = name,
}) => (
  <div>
    <span />
  </div>
);

export default Input;
