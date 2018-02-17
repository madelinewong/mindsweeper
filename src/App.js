import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: [
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: true
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        },
        {
          isHidden: true,
          hasBomb: false
        }
      ]
    };
    this.handleBomb = this.handleBomb.bind(this);
    // this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleBomb(position) {
    const clickedSquare = this.state.squares[position];
    //does it have a bomb?
    //if so YOU LOSE!
    //otherwise continue on
    if (clickedSquare.hasBomb) {
      alert("you lose!💣 ");
      return; //empty return means STOP!
    }

    const first = this.state.squares.slice(0, position);
    // find the last element of first
    // if that element does not have a bomb then change isHidden to false
    if(!first[first.length-1].hasBomb){
      first[first.length-1].isHidden = false;
    }
    

    const last = this.state.squares.slice(position + 1);
    //find the first element of last
    // if that that elment does not have a bomb then change isHidden to false
    if(!last[0].hasBomb){
     last[0].isHidden = false;
    }
    const newSquares = [
      ...first,

      { ...clickedSquare, isHidden: !clickedSquare.isHidden },

      ...last
    ];
    this.setState({ squares: newSquares });
  }

  render() {
    const { squares } = this.state;

    const SquareGrid = squares.map((square, index) => {
      return (
        <div
          key={index}
          style={{ backgroundColor: square.isHidden ? "" : "#9b69ad" }}
          onClick={() => this.handleBomb(index)}
          className="squares"
        />
      );
    });
    return (
      <div className="container">
        <h1>Mindsweeper™</h1>
        <div className="row">{SquareGrid}</div>
      </div>
    );
  }
}
export default App;
