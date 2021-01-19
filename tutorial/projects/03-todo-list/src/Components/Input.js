import React, {Component} from "react";
import styled from "styled-components/macro"


class Input extends Component {
    state = {
        value: "",
        edit: false
    };

    handleChange = (event) => {
        const input = event.target.value;
        this.setState({value: input, edit: input !== ""})
    };

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.handleSubmit();
        }
    };
    handleSubmit = () => {
        this.props.handleTaskAdd(this.state.value);
        //Resets Input
        this.setState({value: "", edit: false})
    };
    render() {
        return(
            <Wrapper>
                <StyledInput
                    type="text" placeholder="Add Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                {this.state.edit && <Button onClick={this.handleSubmit}>Add</Button>}
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
`;


const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  border: none;
  font-size: 1rem;
  outline: none;
`;
const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-left: 1px #dddddd;
  outline: none;
  transition: all 0.15s 0s linear;
  font-size: 1rem;
  color: black;
  &:hover {
    background-color: lightgreen;
    color: white;
    cursor: pointer;
  }
  &:active {
    filter: brightness(110%);
  }
`;
export default Input
