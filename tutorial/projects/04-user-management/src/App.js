import React, {Component} from "react"
import styled from "styled-components/macro"
import Form from "./Component/Form"
import User from "./Component/User"

class App extends Component {

    state = {
        users: []
    };
    handleUserSubmit = (user) => {
      this.setState({users: [user, ...this.state.users]});
    };
    render(){

        return (
            <Component1>
                <Wrapper>
                    <Form onFormSubmit={this.handleUserSubmit}/>
                    <UserList>
                        {this.state.users.map((user) => {
                            return(
                            <User
                                key={user.userName}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                userName={user.userName}
                                email={user.email}
                                bio={user.bio}
                                country={user.country}
                                notifications={user.notifications}
                            />
                            )
                        })}
                    </UserList>
                    {this.bruh}
                </Wrapper>
            </Component1>
        )
    }
}

const Component1 = styled.div`
  display: flex;
  background-color: #ddd;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserList = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`;
export default App;
