import React from "react";
import styled from "styled-components/macro"

const List = ({items, onComplete, onDelete}) => (
    <Component>
        {items.map(({id, label, completed}) => (
            <Item key={id}>
                <Complete onClick={onComplete(id)} completed={completed}>
                    {completed && (<span role="img" aria-label="complete">✔</span>)}
                </Complete>
                <Label completed={completed}>{label}</Label>
                <Delete onClick={onDelete(id)}>
                    <span role="img" aria-label="delete">❌</span>
                </Delete>
            </Item>
        ))}
        {items.length === 0 && <NoItems>Add More Tasks!</NoItems>}
    </Component>
);

const Component = styled.div`
  padding: 1rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
  transition: all 0.25s 0s linear;
`;

const buttonStyles = `
    outline: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
`;

const Complete = styled.button`
  ${buttonStyles};
  color: green;
  font-weight: bold;
  font-size: 1rem;
  border: ${props => props.completed ? 0 : "1px solid #eee"}
`;
const Label = styled.p`
  margin: 0 0 0 0.5rem;
  flex: 1;
  font-size: 1.3rem;
  text-decoration: ${props => props.completed ? "line-through" : "none"};
  color: ${props => props.completed ? "#ccc" : "#000"};
  transition: all 0.25s 0s;
`;
const Delete = styled.button`
  ${buttonStyles};
  border: 0;
`;
const NoItems = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
`;
export default List
