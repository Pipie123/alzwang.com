import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      color: ${props => props.color};
      background-color: ${props => props.backgroundColor};
      padding: 0 8rem;
      font-family: "Namun Gothic", sans-serif;
    }
`;

export default GlobalStyle
