import React from "react";

const Contact = (props) => {

    const handleButtonClick = (address) => () => {
      props.history.push(address);
    };

    return (
        <div>
            <h1>Bruh Contact</h1>
            <button onClick={handleButtonClick("./")}>Home Button</button>
            <button onClick={handleButtonClick("./about")}>About Button</button>
        </div>
    );
};

export default Contact;
