import React from 'react';
import styled from 'styled-components';
import ButtonOption from '../atoms/ButtonOption';

const TodoElement = styled.div`
  display: flex;
  width: 500px;
  background-color: #cccccc;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const TodoOptions = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

const TodoTitle = styled.h3`
  margin-right: 10px;
  text-transform: uppercase;
`;

const TodoItem = ({ name, description }) => {
  const handleOptions = (e) => {
    if (e.target.name === 'edit') {
      console.log('edit');
    }

    if (e.target.name === 'delete') {
      console.log('delete');
    }
  };

  return (
    <TodoElement>
      <div>
        <TodoTitle>{name}</TodoTitle>
        <p>{description}</p>
      </div>
      <TodoOptions>
        <ButtonOption name="edit" eventHandler={handleOptions}>Editar</ButtonOption>
        <ButtonOption name="delete" eventHandler={handleOptions}>Eliminar</ButtonOption>
      </TodoOptions>
    </TodoElement>
  );
};

export default TodoItem;
