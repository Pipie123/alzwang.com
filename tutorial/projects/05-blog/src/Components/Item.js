import React from "react";
import {navigate} from "@reach/router";
import styled from "styled-components/macro"

const Item = ({data}) => {
    const {id, title, short, image} = data;

    const handleClick = () => {
        navigate(`post/${id}`);
    };

    return(
        <Component onClick={handleClick}>
            <Image image={image} />
            <Content>
                <Title>{title}</Title>
                <Short>{short}</Short>
            </Content>
        </Component>
    )
};

const Component = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.375rem;
  transition: all 0.25s 0s;
  
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
  
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
  }
`;

const Image = styled.div`
  margin-right: 2rem;
  width: 150px;
  height: 150px;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 50%;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.75rem;
`;

const Short = styled.p`
  margin: 0;
`;

export default Item;
