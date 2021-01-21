import React from "react";
import styled from "styled-components/macro";

const Section = ({title, description, children}) => (
    <Component>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
    </Component>
);

const Component = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h4`
  margin: 0 0 0.5rem 0;
`;
const Description = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
`;
export default Section;
