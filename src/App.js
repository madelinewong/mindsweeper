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
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleBomb(position) {

    const clickedSquare = this.state.squares[position];
    //does it have a bomb?
    //if so YOU LOSE!
    //otherwise continue on
    if (clickedSquare.hasBomb){
      alert('you lose!💣 ');
      return //empty return means STOP!
    }

    const rightClickedSquare = this.state.squares[position]; 
    if (rightClickedSquare.rightClick(console.log(pls)){
    }
    

    const first = this.state.squares.slice(0, position);

    const last = this.state.squares.slice(position + 1);

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
          style={{ backgroundColor: square.isHidden ? "" : "#9b69ad"  }}
          onClick={() => this.handleBomb(index)}
          className="squares"
        />
      );
    const { squares } = squares.map((square, index) =>{
      return (
        <div key = { index }
        style={{ backgroundColor: square.isHidden ? "" : "🚩"}}
        onRightClick={() => this.handleRightClick(index)}
        className="squares" 
        /> 
      )
    })
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
