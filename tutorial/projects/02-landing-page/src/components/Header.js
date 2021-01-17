import React from "react"
import styled from "styled-components/macro"
const Header = () => (
    <Heading>
        <Wrapper>
            <Button>Home</Button>
            <Button>Portfolio Work</Button>
            <Button>About Me</Button>
        </Wrapper>
    </Heading>
);

const Heading = styled.div`
border: 1px red solid;
display: flex;
justify-content: center;
padding: 1rem;

`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  transition: all 0.25s ease-in;
  
  &:not(:last-of-type) {
    margin-right: 4rem;
  }
  &:hover {
    backdrop-filter: invert(7%);
    cursor: pointer;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default Header
