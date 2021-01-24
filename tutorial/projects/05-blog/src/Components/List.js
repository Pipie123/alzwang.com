import React from "react";
import styled from "styled-components/macro"
import Item from "./Item"
const List = ({posts}) => (
    <Component>
        <Wrapper>
            {posts.map((post) => (
                <Item key={post.id} data={post} />
            ))}
        </Wrapper>
    </Component>
);

const Component = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export default List;
