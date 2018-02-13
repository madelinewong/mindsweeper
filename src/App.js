import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      squares: [
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },  
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },
        {
          isHidden: true,
          hasBomb:  false, 
        },  
        {
          isHidden: true,
          hasBomb:  false, 
        },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },
      {
        isHidden: true,
        hasBomb:  false, 
      },  
      {
        isHidden: true,
        hasBomb:  false, 
      },
      ]
    }
  this.handleBomb = this.handleBomb.bind(this);
  }
  handleBomb(position){
    const clickedSquare = this.state.squares[position]; 
    const first = this.state.squares.slice(0, position); 
    const last = this.state.squares.slice(position + 1);
    const newSquares = [
      ...first, 
      {...clickedSquare, handleBomb: !clickedSquare.handleBomb}, 
      ...last
    ];
    this.setState({'squares': newSquares});
  }
  render() {
    const { squares } = this.state; 
    const SquareGrid = squares.map((squares, index) => <div key={index}
                                                   ishidden={squares.isHidden}
                                                   hasbomb={squares.hasBomb}  
                                                   onClick={()=> this.handleBomb(index)}
                                                   className= {"squares"}/>)
    return ( 
      <div className= 'container'>
      <h1>pls</h1>
      <div className='row'>
      { SquareGrid }
      </div>
    </div>
    );
  }
}

export default App;
