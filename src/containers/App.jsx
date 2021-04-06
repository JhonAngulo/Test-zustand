import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import FormTodo from '../components/FormTodo';
import TodoItem from '../components/molecules/TodoItem';

import store from '../store';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`;

const Hero = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

const App = () => {
  const { todos } = store();

  return (
    <>
      <GlobalStyle />
      <>
        <Header />
        <Hero>
          <FormTodo />
          <div>
            {
            !todos.length && <span>Aun no tienes tareas, si lo deseas puedes crear una</span>
          }
            {
            todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))
            }
          </div>
        </Hero>
      </>
    </>

  );
};

export default App;
