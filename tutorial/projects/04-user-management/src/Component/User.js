import React from "react";
import styled from "styled-components";
const User = ({userName, firstName, lastName, email, bio, country, notifications}) => (
    <Component>
        <Header>User Details of {firstName} {lastName}</Header>
        <Field>
            <Text>
                <strong>Username:</strong>
            </Text>
            <Item>{userName}</Item>
        </Field>
        <Field>
            <Text>
                <strong>Email:</strong>
            </Text>
            <Item>{email}</Item>
        </Field>
        <Field>
            <Text>
                <strong>Bio:</strong>
            </Text>
            <Item>{bio}</Item>
        </Field>
        <Field>
            <Text>
                <strong>Country:</strong>
            </Text>
            <Item>{country}</Item>
        </Field>
        {notifications.map(n => (
            <Field>
                <Text><strong>{n.label}:</strong></Text>
                <Item>{n.checked.toString().toUpperCase()}</Item>
            </Field>
        ))}
    </Component>
);

// Wrapper
const Component = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  padding: 1rem 2rem;
`;
// Header

const Header = styled.h4`
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.25rem;
  text-align: center;
  margin: 0 0 1rem 0;
`;

// Text Field

const Field = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  margin: 0;
  min-width: 6rem;
`;

const Item = styled.p`
  margin: 0;
  overflow-wrap: break-word;
  max-width: 100%;
  display: flex;
`;

export default User;
