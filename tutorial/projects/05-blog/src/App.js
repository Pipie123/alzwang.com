import React from "react";
import {Router} from "@reach/router";
import styled from "styled-components/macro";

import List from "./Components/List";
import Post from "./Components/Post";

import posts from "./Components/data/posts";


const App = () => (
    <Component>
        <Router>
            <List path="/" posts={posts}/>
            <Post path="post/:postId" posts={posts} />
        </Router>
    </Component>
);

const Component = styled.div`

`;

export default App;
