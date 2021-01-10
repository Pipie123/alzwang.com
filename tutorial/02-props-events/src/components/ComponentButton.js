import React, {Component} from "react";

class ComponentButton extends Component {
    render() {
        const { onButtonClick, times} = this.props;
        return <button onClick={onButtonClick("Class")}>Pressed: {times}</button>
    }
}

export default ComponentButton;
