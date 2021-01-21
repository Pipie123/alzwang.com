import React from "react";
import styled from "styled-components/macro";

const Select = ({name, label, value, onChange}) => {
    const list = [
        {
            key: -1,
            value: "Default",
            country: "Choose a Country",
        },
        {
            key: 0,
            value: "US",
            country: "United States of America",
        },
        {
            key: 1,
            value: "CH",
            country: "China",
        },
        {
            key: 2,
            value: "RS",
            country: "Russia",
        },
        {
            key: 3,
            value: "KR",
            country: "Korea",
        },
        {
            key: 4,
            value: "JP",
            country: "Japan",
        },
    ];

    return(
        <Component>
            <Label htmlForm={name}>{label}</Label>
            <StyleSelect id={name} name={name} value={value} onChange={onChange(name)}>
                {list.map(({key, value, country}) => (<option key={key} name={value}>{country}</option>))};
            </StyleSelect>
        </Component>
    )
};

const Component = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  transition: all 0.25s 0s;
`;

const Label = styled.label`
  margin: 0 1rem 0 0;
  min-width: 8rem;
`;

const StyleSelect = styled.select`
  padding: 0.5rem 1rem;
  flex: 1;
  background-color: #fff;
  border-radius: 0.375rem;
  border: 1px solid #ddd;
  outline-color: #ccc;
  appearance: none;
`;

export default Select;
