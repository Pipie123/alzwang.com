import React from "react";
import styled from "styled-components/macro"
import Form from "./Form"
import Addition from "./Addition";
const Hero = () => (
    <Component>
        <Wrapper>
            <Header>
                This is like the Header Bruh
            </Header>
            <Content>
                This is like the Content Moment
            </Content>
            <Content>
                This is like the bottom of the Content Dab
            </Content>
            <Form/>
            <Addition/>
        </Wrapper>
    </Component>
);

const Component = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
min-height: 20vh;
justify-content: center;
align-items: center;
border: gold solid 1px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: blue solid 1px;
`;
const Header = styled.h1`
  font-family: "JetBrains Mono", serif;
  max-width: 50%;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 2rem;
`;
const Content = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 0;
  :nth-of-type(1) {
    margin-bottom: 0.5rem;
  }
`;
export default Hero;
