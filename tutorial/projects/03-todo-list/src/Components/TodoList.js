import React, {Component} from "react"
import styled from "styled-components/macro";
import List from "./List"
import Filter from "./Filter";
import Input from "./Input"
class TodoList extends Component {
    state = {
        mode: "all",
        items: [
            {
                id: 1,
                label: "Bruh Moment",
                completed: false
            },
            {
                id: 2,
                label: "Bruh Moment",
                completed: true
            },
            {
                id: 3,
                label: "Bruh Moment",
                completed: false
            },
        ]
    };
    // Either All, Active, or Completed
    handleModeChange = mode => () => {
      this.setState({mode})
    };

    handleComplete = id => () => {
        const completedItems = [ ... this.state.items];

        const filteredItem = completedItems.filter((item) => item.id === id)[0];
        filteredItem.completed ? console.log(`I guess ${id} is not completed`) : console.log(`${id} is completed`);
        filteredItem.completed = !filteredItem.completed;

        this.setState({item: completedItems});
    };
    handleDelete = id => () => {
        console.log(`${id} is deleted`);
        const filteredItem = this.state.items.filter(item => item.id !== id);
        console.log(filteredItem);
        this.setState({items: filteredItem});
    };
    handleTaskAdd = (value) => {
        const task = {
            id: this.state.items.length + 1,
            label: value,
            completed: false
        };
        const newItems = [...this.state.items, task];

        this.setState({items: newItems});
    };
    render(){
        const {mode, items} = this.state;

        let filteredItems;

        filteredItems = mode === "completed" ? items.filter(item => item.completed) :
            mode === "active" ? items.filter(item => !item.completed) : items;


        return(
            <Wrapper>
                <Filter mode={mode} onModeChange={this.handleModeChange}/>
                <Input handleTaskAdd={this.handleTaskAdd}/>
                <List items={filteredItems} onComplete={this.handleComplete} onDelete={this.handleDelete}/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.20);
  min-width: 400px;
  transition: height 0.5s 0s;
`;

export default TodoList
