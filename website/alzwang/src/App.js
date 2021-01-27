import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStyle from "./stylesheet/globalStyles";
import Header from "./components/Header";

import Home from "./content/Home";
import About from "./content/About"
import Projects from "./content/Projects"

const App = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <GlobalStyle backgroundColor={"#D2E0CA"} color={"#48613A"} />
                        <Header color1={"#D2E0CA"} color2={"#48613A"} p={0}/>
                        <Home/>
                    </Route>
                    <Route path={"/projects"}>
                        <GlobalStyle backgroundColor={"#CAE0DD"} color={"#3A615C"}/>
                        <Header color1={"#CAE0DD"} color2={"#3A615C"} p={1}/>
                        <Projects />
                    </Route>
                    <Route path={"/about"}>
                        <GlobalStyle backgroundColor={"#E0CAE0"} color={"#613A61"}/>
                        <Header color1={"#E0CAE0"} color2={"#613A61"} p={2}/>
                        <About />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};


export default App;
