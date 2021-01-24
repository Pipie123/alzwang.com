import React from "react";
import styled from "styled-components/macro";

import {Link} from "@reach/router";

const Found = ({post}) => {
    const {title, short, text, image} = post;

    return (
        <Component>
            <ImageWrapper image={image}/>
            <Header>{title}</Header>
            <Subheader>{short}</Subheader>
            {text.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
            ))}
            <StyledLink to="/">This is where you can find articles</StyledLink>
        </Component>
    );
};

const Component = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
`;

const ImageWrapper = styled.div`
  align-self: center;
  width: 50%;
  height: 300px;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
`;

const Header = styled.h2`
  text-align: center;
  margin: 2rem 0 1rem 0;
`;

const Subheader = styled.p`
  margin: 0 0 2rem;
  text-align: center;
  color: #777;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  &:not(:last-of-type) {
  margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  align-self: flex-start;
  margin-top: 2rem;
  
  &:hover {
    cursor: pointer;
    
  }
`;

export default Found
