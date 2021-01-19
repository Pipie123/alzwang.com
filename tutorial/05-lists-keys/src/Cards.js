import React from "react"
import Individual from "./Individual";
import styled from "styled-components/macro"
const Cards = ({data}) => (
    <div>
        <Wrapper>{data.map(person => (
            <Individual key={person.id} name = {person.name} rank = {person.rank}
                        description={person.description} picture={person.picture}/>
        ))}
        </Wrapper>
    </div>
);
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  }
`;
export default Cards;
