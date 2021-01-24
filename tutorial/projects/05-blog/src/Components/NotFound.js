import React, {Component} from "react";
import { Redirect } from "@reach/router";
import styled from "styled-components/macro";

class NotFound extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {

        setTimeout(() => this.setState({redirect: true}), 3000)
    };

    render() {
        return this.state.redirect ? (
            <Redirect noThrow to="/"/>
            ) :
            (
                <Wrapper>
                    <Header>
                        Post not Found. Redirecting to Home!
                    </Header>
                </Wrapper>
            )
    }
}
const Wrapper = styled.div``;

const Header = styled.h2`
  margin: 0;
`;


export default NotFound
