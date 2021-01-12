import React, {Component} from "react";
import Board from "./components/Board.js";
import "./css-components/board.css";
class Game extends Component {
    render() {
        return <div className="board"><Board/></div>
    }
}
export default Game;
