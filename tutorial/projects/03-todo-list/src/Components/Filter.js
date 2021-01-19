import React from "react";
import styled from "styled-components/macro"

const buttons = [
    {
        value: "all",
        display: "All"
    },
    {
        value: "active",
        display: "Active"
    },
    {
        value: "completed",
        display: "Completed"
    },
    ];


const Filter = ({mode, onModeChange}) => (
    <Component>
        {buttons.map(({value, display}) =>
            <Button key={value} onClick={onModeChange(value)} selected={mode === value}>{display}</Button>)}
    </Component>
);

const Component = styled.div`
padding: 1rem;
border-bottom: 1px solid #ddd;
display: flex;
`;

const Button = styled.button`
  border: none;
  outline: none;
  flex: 1;
  transition: all 0.25s ease-in 0s;
  font-weight: ${props => props.selected ? "700" : "400"};
  filter: invert(${props => props.selected ? "15%" : "0%"});
`;
export default Filter;
