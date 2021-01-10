import React from "react";
import "../styles/button.css";
const Bruh = () => {
  alert("Bruh Moment")
};
const Button = () => (
    <button className="Button" onClick={Bruh}>Bruh Button</button>
);

export default Button;
