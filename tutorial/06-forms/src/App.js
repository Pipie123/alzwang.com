import React, {Component} from "react"

class App extends Component {
    state = {
        firstName: "Bruh",
    };

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.setState({firstName: inputValue})
    }
    ;
    render() {
        const {firstName} = this.state;
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name = "firstName"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <h1>{firstName}</h1>
            </div>
        )
    }
}

export default App
