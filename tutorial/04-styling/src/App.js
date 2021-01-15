import React from "react";
import "./stylesheet/App.css"
import FirstButton from "./components/FirstButton";
import SecondButton from "./components/SecondButton";
import {createUseStyles} from "react-jss";
import styled from "styled-components";

const useStyles = createUseStyles({
    app: {backgroundColor: "#000"},
    header: {},
    paragraph: {},
    button: {},
});


const styles = {
    app: {
        backgroundColor: "#222",
        padding: "1rem",
        color: "#fff"
    },
    header: {
        fontFamily: "monospace",
        margin: 0,
        fontSize: "1.75rem"
    }
};


const Wrapper = styled.div`
   background-color: antiquewhite;
`;

const Header = styled.h1`
  color: darkslategrey;
`;
const Paragraph = styled.p `
  font-size: 3rem;
`;
const Button = styled.button `
  border: 10px solid white;
  background-color: black;
  color: white;
`;
const App = () => {
    const classes = useStyles();

    return (
        <div>
            <div style={styles.app}>
                <h1 style={styles.header}>Header</h1>
                <p className="Paragraph">Paragraph</p>
                <button className="Button">Button</button>
            </div>
            <div className={classes.app}>
                <FirstButton />
                <SecondButton />
                <h1 className={classes.header}>Bruh</h1>
                <p className={classes.paragraph}>Moment</p>
                <button className={classes.button}>3</button>
            </div>
            <Wrapper>
                <Header>1</Header>
                <Paragraph>2</Paragraph>
                <Button>3</Button>
            </Wrapper>
        </div>
    )
};

export default App
