import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import store from '../store';
import Input from './atoms/Input';
import Button from './atoms/Button';

const StyledForm = styled.form`
  width: 400px;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  background-color: #cccccc;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export default function App() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const { addTodo } = store();

  const onSubmit = (data) => {
    addTodo(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <p>Complete los campos para crear la tarea</p>
      <Input name="name" register={register} required placeholder="Tarea" />
      <Input name="description" register={register} required placeholder="Descripción" />
      <Button name="Crear" type="submit" />
      {errors.name && <p>El nombre de la Tarea es requerido</p>}
      {errors.description && <p>La descripción es requerida</p>}
    </StyledForm>
  );
}
