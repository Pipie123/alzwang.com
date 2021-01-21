import React from "react";
import styled from "styled-components/macro";

const Input = ({name, label, value, onChange, type}) => {
    const generateInformation = () => {
       return type === "textarea" ? <Textarea id={name} onChange={onChange(name)} value={value} type={type} rows="5"/> :
           <StyledInput onChange={onChange(name)} type={type} value={value}/>
    };
    return (
        <Component>
            <Label htmlFor={name}>{label}</Label>
            {generateInformation()}
        </Component>);
};

const Component = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const Label = styled.p`
  margin: 0 1rem 0 0;
  min-width: 8rem;
`;

const inputStyles = `
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #ddd;
  flex: 1;
  outline-color: #ccc;
`;

const StyledInput = styled.input`
  ${inputStyles};
`;

const Textarea = styled.textarea`
  ${inputStyles};
`;

export default Input;
