import React, {Component} from "react";
import FunctionalButton from "./components/FunctionalButton";
import ComponentButton from "./components/ComponentButton";


class App extends Component {

    state = {
      times: 0
    };

    onButtonClick = (name) => () => {
        this.setState({times: this.state.times +=1});
        if (this.state.times === 10) alert(`Bruh Moment from ${name}`);
    };

    render() {
        return (
            <div>
                <FunctionalButton text="Bruh" times={this.state.times} onButtonClick={this.onButtonClick}/>
                <ComponentButton times={this.state.times} onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}

export default App
