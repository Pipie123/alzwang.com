import React from "react";
import styled from "styled-components/macro";
import Found from "./Found";
import NotFound from "./NotFound"


const Post = ({postId, posts}) => {
    const data = posts.filter((post) => post.id === parseInt(postId));
    return (
        <Component>
            <Wrapper>
                {data[0] ? <Found post={data[0]} /> : <NotFound />}
            </Wrapper>
        </Component>
    )
};


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

export default Post;
