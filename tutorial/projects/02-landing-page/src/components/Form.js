import React from "react"
import styled from "styled-components"
const Form = () => (
    <Component>
        <Input type="email" placeholder="Your email address"/>
        <Submit>Send it to me</Submit>
    </Component>
);

const Component = styled.div`
  margin: 3rem auto;
  border: 1px solid green;
`;
const Input = styled.input`
  margin-right: 3rem;
  border-radius: 0.5rem;
  border: 1px #ccc solid;
  padding: 0.5rem 0.2rem;
  outline: none;
  &:focus {
  filter: opacity(70%);
  }

`;

const Submit = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #eee;
  border: 1px solid #ddd;
  outline: none;
  transition: background-color 0.25s ease-in;
  &:active{
    filter: opacity(70%);
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

export default Form;
