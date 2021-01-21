import React, {Component} from "react";
import styled from "styled-components/macro";
import Section from "./Section";
import Input from "./Input";
import Select from "./Select";
import CheckBox from "./CheckBox"

class Form extends Component {

    defaultState = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        country: "",
        notifications: [
            {
                label: "Newsletter",
                value: "newsletter",
                checked: false,
            },
            {
                label: "Updates",
                value: "updates",
                checked: false,
            },
            {
                label: "Reports",
                value: "reports",
                checked: false,
            },
        ]
    };

    emptyState = {
        userName: "Default User",
        firstName: "First Name",
        lastName: "Last Name",
        email: "abc@defaultemail.com",
        bio: "This is a default email that will only show as an example",
        country: "USA",
        notifications: [
            {
                label: "Newsletter",
                value: "newsletter",
                checked: false,
            },
            {
                label: "Updates",
                value: "updates",
                checked: false,
            },
            {
                label: "Reports",
                value: "reports",
                checked: false,
            },
        ]
    };

    state = this.defaultState;

    handleNameChange = (name) => (event) => {
        this.setState({[name]: event.target.value});
    };

    handleCheckBoxChange = (name) => () => {
        const newNotification = [...this.state.notifications];

        const neededNotifications = newNotification.filter((item) => item.value === name)[0];

        neededNotifications.checked = !neededNotifications.checked;

        this.setState({notifications: newNotification})
    };

    handleFormSubmission = () => {
        this.state.userName === "" ? this.props.onFormSubmit(this.emptyState) : this.props.onFormSubmit(this.state);
        this.setState(this.defaultState);
        // Gotta be a better way to do this
        this.setState({
            notifications: [
                {
                    label: "Newsletter",
                    value: "newsletter",
                    checked: false,
                },
                {
                    label: "Updates",
                    value: "updates",
                    checked: false,
                },
                {
                    label: "Reports",
                    value: "reports",
                    checked: false,
                },
            ]
          });
        };

    render(){
        const { userName, firstName, lastName, email, bio, country, notifications} = this.state;
        return(
            <Wrapper>
                <Header>
                    <Title>Bruh</Title>
                </Header>
                <Content>
                    <Section title="Profile" description="Information about the user. Publicly available">
                        <Input type="text" label="Username:" value={userName} name="userName"
                               onChange={this.handleNameChange}/>
                        <Input type="textarea" label="Bio:" value={bio} name="bio" onChange={this.handleNameChange}/>
                    </Section>
                    <Section title="Information"
                             description="Additional information. Please check out all the data
                             so we can get in touch with the user">
                        <Input type="text" label="First name:" value={firstName} name="firstName" onChange={this.handleNameChange}/>
                        <Input type="text" label="Last name:" value={lastName} name="lastName" onChange={this.handleNameChange}/>
                        <Input type="email" label="Email:" value={email} name="email" onChange={this.handleNameChange}/>
                        <Select label="Country: " value={country} name="country" onChange={this.handleNameChange}/>
                    </Section>
                    <Section title="Notifications" description="Please define how you want
                    to receive the messages">
                        <p>Email notification settings: </p>
                    </Section>
                    <CheckBox
                        label="Email"
                        name="notifications"
                        values={notifications}
                        onChange={this.handleCheckBoxChange}
                    />
                </Content>
                <Footer>
                    <Button>Cancel</Button>
                    <Button primary onClick={this.handleFormSubmission}>Add</Button>
                </Footer>
            </Wrapper>
        )
    }
}
// Wrapper
const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  
  border-radius: 0.375rem;
  min-width: 600px;
`;

// Header Content
const Header = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 300;
`;

// Main Content
const Content = styled.div`
  padding: 1rem 2rem;
`;

// Footer Content
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  
  padding: 1rem 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  
  border: 1px solid ${props => props.primary ? "#68d391" : "#ddd"};
  border-radius: 0.375rem;
  background-color: ${props => props.primary ? "#68d391" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#000"};
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  
  outline: 0;
  transition: all 0.25s ease-in-out;
  
  &:first-of-type {
    margin-right: 1rem;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
  
`;

export default Form;
