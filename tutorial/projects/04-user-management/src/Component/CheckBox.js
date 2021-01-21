import React from "react";
import styled from "styled-components/macro"
const CheckBox = ({name, label, values, onChange}) => (
    <Component>
        <Label htmlFor={name}>{label}:</Label>
        <Values>
            {values.map((item) => (
                <CheckBoxLabel key={item.value}>
                    <CheckBoxInput
                        type="checkbox"
                        checked={item.checked}
                        onChange={onChange(item.value)}
                    />
                    {item.label}
                </CheckBoxLabel>
            ))}
        </Values>
    </Component>
);

const Component = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Label = styled.div`
  margin: 0 1rem 0 0;
  min-width: 8rem;
`;

const Values = styled.div`
  display: flex;
  flex-direction: row;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  
  margin-right: 0.75rem;
  
  &:hover {
    cursor: pointer;
    color: #777;
  }
`;

const CheckBoxInput = styled.input`
  margin-right: 0.25rem;
`;

export default CheckBox;
