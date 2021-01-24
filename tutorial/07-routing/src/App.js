import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
const App = () => (
    <Wrapper>
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Wrapper>
);


const Wrapper = styled.div`
  font-family: sans-serif;
`;

const Nav = styled.div`
  & > a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
export default App
