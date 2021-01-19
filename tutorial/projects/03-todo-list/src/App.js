import React from "react"
import styled from "styled-components/macro"
import TodoList from "./Components/TodoList";
const App = () => (
    <Component>
        <Wrapper>
            <Header>
                This is a To-do List
            </Header>
            <TodoList/>
        </Wrapper>
    </Component>
);

const Component = styled.div`
  display: flex;
  background-color: #dddddd;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 3rem;
`;
export default App
