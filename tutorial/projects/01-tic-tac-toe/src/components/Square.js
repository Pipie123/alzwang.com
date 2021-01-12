import React from "react";
import "../css-components/board.css";
const Square = ({value, onClick}) => (
    <button onClick={onClick} className="square">{value}</button>
);

export default Square
