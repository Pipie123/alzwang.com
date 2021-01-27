import React, {} from "react";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";

const Header = ({color1, color2, p}) => {

    const bruh = [
        {
            id: 0,
            name: "Home",
            path: "/"
        },
        {
            id: 1,
            name: "Projects",
            path: "/projects"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        }
    ];

    return (
        <Component1>
            <Wrapper>
                <Element>
                    <Heading color2={color2}>alzwang</Heading>
                </Element>
                <Element>
                    <Border color1={color1} color2={color2}>
                        {bruh.map((element) =>
                            <BorderElement key={element.id} color1={color1} color2={color2} p={p}>
                                <Link to={element.path}>
                                    <Navigation color1={color1} color2={color2}>{element.name}</Navigation>
                                </Link>
                            </BorderElement>
                        )}
                    </Border>
                </Element>
            </Wrapper>
        </Component1>
    );
};

//#48613A

const Component1 = styled.div`
  width: 100%;
  border: 1px red solid;
`;

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  place-content: center space-between;
  border: 1px blue solid;
`;
const Element = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h2`
  color: ${props => props.color2};
`;

const Border = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  background-color:  ${props => props.color1};
  border: 1px ${props => props.color2} solid;
  border-radius: 150px;
`;
const BorderElement = styled.div`
  display: flex;
  padding: 0 3rem;
  color: ${props => props.color2};
  transition: opacity 0.5s 0s;
  &:first-child {
        color: ${props => props.color1};
        border-radius: 150px;
        background-color: ${props => props.color2};
      }
  }
  
  &:hover {
    opacity: 80%;
  }
`;

const Navigation = styled.button`
  
  border: none;
  color: ${props => props.color2};
  background-color: ${props => props.color1};
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem;
  padding: 0;
  outline: none;
  &:first-child {
        color: ${props => props.color1};
        background-color: ${props => props.color2};
  }
`;

export default Header;
