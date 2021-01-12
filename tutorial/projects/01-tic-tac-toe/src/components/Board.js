import React, {Component} from "react";
import Square from "./Square";
import "../css-components/board.css";

const calculateWinner = (square) => {
    const lines = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return "";
};

class Board extends Component {
    state = {
        square: ["", "", "", "", "", "", "", "", ""],
        xIsTrue: true
    };
    handleClick = number => () => {
        //copies the original square to replace it
        const newSquares = [... this.state.square];
        //Checks if there is a Winner
        if (calculateWinner(this.state.square)) return "";
        //Checks if the box is empty, then fill in base on player turn
        else if (!newSquares[number]) {
            newSquares[number] = this.state.xIsTrue ? "X" : "O";
            this.setState({square: newSquares, xIsTrue: !this.state.xIsTrue});
        }
        else {
            alert("There is no winner");
            this.resetButton();
        }
    }
    ;
    tieDetector = (square) => {
        for (let i = 0; i < square.length; i++) {
            if (!square[i]) return "";
        }
        if(!calculateWinner(this.state.square)) {
            alert("It is a tie, press the reset button!");
            return this.resetButton;
        }
    };

    resetButton = () => {
      this.setState({square: ["", "", "", "", "", "", "", "", ""], xIsTrue: true})
    };
    render() {
        this.tieDetector(this.state.square);
        const winner = calculateWinner(this.state.square);
        let status = winner ? `Winner ${winner}` : `It is ${this.state.xIsTrue ? "X" : "O"}'s turn`;
        return (
        <div>
            <h1>{status}</h1>
            <div className="row">
                <Square value={this.state.square[0]} onClick={this.handleClick(0)}/>
                <Square value={this.state.square[1]} onClick={this.handleClick(1)}/>
                <Square value={this.state.square[2]} onClick={this.handleClick(2)}/>
            </div>
            <div className="row">
                <Square value={this.state.square[3]} onClick={this.handleClick(3)}/>
                <Square value={this.state.square[4]} onClick={this.handleClick(4)}/>
                <Square value={this.state.square[5]} onClick={this.handleClick(5)}/>
            </div>
            <div className="row">
                <Square value={this.state.square[6]} onClick={this.handleClick(6)}/>
                <Square value={this.state.square[7]} onClick={this.handleClick(7)}/>
                <Square value={this.state.square[8]} onClick={this.handleClick(8)}/>
            </div>
            <button className="reset" onClick={this.resetButton}>Reset</button>
        </div>
        )}
}

export default Board
