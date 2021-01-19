import React from "react";
import Daniel from "./images/daniel2.jpg"
import DanielK from "./images/Daniel.png"
import Franco from "./images/Franco.png"
import DanielS from "./images/GoodDaniel.jpg"

import Cards from "./Cards";
const people = [
    {
        id: 0,
        name: "Daniel",
        rank: "Way higher than you think",
        description: "If he ever feeds, be sure to report him.",
        picture: Daniel
    },
    {
        id: 1,
        name: "Daniel K",
        rank: "Average as f",
        description: "His face scored lower on the ACT than you",
        picture: DanielK
    },
    {
        id: 2,
        name: "Franco F",
        rank: "Challenger Nunu player",
        description: "He prob have a harem if he is an anime character",
        picture: Franco
    },
    {
        id: 3,
        name: "Daniel S",
        rank: "Has at least 75% WR",
        description: "I can't see him",
        picture: DanielS
    },
];


const App = () => (
    <div>
        <Cards data={people}/>
    </div>
);

export default App
