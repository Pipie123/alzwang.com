import React from "react"
import styled from "styled-components/macro"

const Footer = () => (
    <Component>
        <Wrapper>
            <Header>This is the footer I guess</Header>
            <Row>
                <Link href="#">Bruh Moment</Link>
                <Link href="#">Ya Yeet</Link>
            </Row>
            <Row>
                <Link href="https://github.com/Pipie123" target="_blank">Github</Link>
                <Link href="https://www.linkedin.com/in/alzwang/" target="_blank">LinkedIn</Link>
                <Link href="#">IDK</Link>
            </Row>
            <SmallText>(C) BruhMoment Inc.</SmallText>
            <Link href="#">Dab</Link>
            <Link href="#">Ondem</Link>
        </Wrapper>
    </Component>
);

const Component = styled.div`
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
`;

const Header = styled.h3`
  margin: 0;
`;
const SmallText = styled.p`
  margin: 0;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export default Footer
