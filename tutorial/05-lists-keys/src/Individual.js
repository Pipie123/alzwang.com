import React from "react"
import styled from "styled-components/macro"

const Individual = ({name, rank, description, picture}) => (
    <Wrapper>
        <Avatar src={picture} alt={name}/>
        <Name>Name: {name}</Name>
        <Rank>Rank: {rank}</Rank>
        <Description>Description: {description}</Description>
    </Wrapper>

);


const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #dddddd;
  padding: 1.5rem;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.20);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  transition: all 0.5s 0s;
  width: 28rem;
  height: 28rem;
  &:hover {
    filter: opacity(70%);
    cursor: pointer;
  }
`;
const Name = styled.h2`
  margin: 1rem 0 0;
  font-size: 3rem;
`;
const Rank = styled.p`
  font-family: "JetBrains Mono", serif;
  margin: 1rem 0 0;
  font-size: 1rem;
`;
const Description = styled.p`
  font-family: "JetBrains Mono", serif;
  margin: 1rem 0 0;
  font-size: 0.75rem;
`;
const Avatar = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export default Individual;
