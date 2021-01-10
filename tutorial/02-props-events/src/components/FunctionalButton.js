import React from "react";

const FunctionalButton = ({onButtonClick, text, times}) => {
    return <button onClick={onButtonClick("Functional")}>{text} {times}</button>
};

export default FunctionalButton
