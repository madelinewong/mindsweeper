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
      
  const SquareGrid = squares.map((squares, index) => {
   return (<div key={index}

                                                    
            ishidden={squares.isHidden}
                                                              
            hasbomb={squares.hasBomb}  
                                                          
            onClick={()=> this.handleBomb(index)}
            className= "squares"/>)
          //   return ( 
          //     <div className= 'container'>
          //   <h1>Mindsweeper™</h1>
          //     <div className='row'>
          //       { SquareGrid }
          //     </div>
          // </div>)
    });
    return <div>
      {SquareGrid}
    </div>
  }
}
//   const generatePlayerBoard = (numberOfRows) => {
//     let board = []; 
//     for (let i = 0; i < numberOfRows; i++){
//       let row = []; 
//     }
//     board.push(row);
//   }
//   return board; 
  
//   const generateBombBoard = (numberOfRows, numberOfBombs) => {
//     let board = []; 
//     for (let i = 0; 1 < numberOfRows; i++){
//       let board = []; 
//     }
//     board.push(row)
//   }

//   let numberOfBombsPlaced = 0; 
//   while (numberOfBombsPlaced < numberOfBombs){
//     let randomRowIndex = Math.floor(Math.random() *numberOfRows);
//     if (board[randomRowIndex] !== 'B'){
//       board[randomRowIndex] = 'B'; 
//       numberOfBombsPlaced +=1;
//     }

//   }
//   return board;

//   const getNumberofNeighborBombs = (bombBoard, rowIndex) => {
//     const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]; 
//     const numberOfRows = bombBoard.length; 
//     let numberOfBombs = 0; 
//     neighborOffsets.forEach(offset => {
//       const neighborRowIndex = rowIndex + offset[0]; 
//       if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows){
//         if(bombBoard[neighborRowIndex] === 'B'){
//           numberOfBombs +=1;
//         }
//       }
//     });
//     return numberOfBombs;
//   }
  
//   const flipTile = (playerBoard, bombBoard, rowIndex) => {
//     if(playerBoard[rowIndex] !== ' '){
//       console.log('This tile is already flipped!!'); 
//       return; 
//     } else if (bombBoard[rowIndex] === 'B'){
//       playerBoard[rowIndex] = 'B'; 
//     } else {
//       playerBoard[rowIndex] = getNumberofNeighborBombs(bombBoard, rowIndex);
//     }
//   };

//   const printBoard = board => {
//     console.log(board.map(row => row.join(' | ')).join('\n'));
//   }

//   let playerBoard = generatePlayerBoard(10, 10); 
//   let bombBoard = generateBombBoard(10, 10, 5); 

//   console.log('Player Board: ');
//   printBoard(playerBoard);
//   console.log('Bomb Board: ');
//   printBoard(bombBoard); 

//   flipTile(playerBoard, bombBoard, 0, 0); 
//   console.log('Updated Player Board: '); 
//   printBoard(playerBoard); 
// }
// }
export default App;
