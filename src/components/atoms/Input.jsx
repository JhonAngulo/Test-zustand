import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: calc(100% - 20px);
  outline: none;
  margin: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
`;

const Input = ({
  name, register, required = false, placeholder = name,
}) => (
  <StyledInput
    name={name}
    {...register(`${name}`, { required })}
    placeholder={placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
  />
);

export default Input;
