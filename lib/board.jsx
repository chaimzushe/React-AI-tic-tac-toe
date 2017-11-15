import React from 'react';
import ReactDOM from 'react-dom';
let _ = require('lodash');

class Board {

  constructor(){


    this.coord_map = {
      0: [0,0],
      1: [0,1],
      2: [0,2],
      3: [1,0],
      4: [1,1],
      5: [1,2],
      6: [2,0],
      7: [2,1],
      8: [2,2]
    }

    this.innerBoard = [[null,null,null], [null,null,null], [null,null,null] ];
    this.squares =  [" ", " ", " "," "," "," "," "," "," "];
    this.winner = null;
    this.mark =  "x"

  }



resetGame(winningMark){
    this.innerBoard = [[null,null,null], [null,null,null], [null,null,null] ];
    this.squares = [" ", " ", " "," "," "," "," "," "," "];
    this.winner =  null;
  }


  isWon(mark){
    let grid = this.innerBoard
    let transposed = _.zip.apply(_, grid )
    if (grid.some(row => row.every((el) => el === mark)) ||
        transposed.some(row => row.every((el) => el === mark)) ||
        (grid[0][0] === mark && grid[1][1] === mark && grid[2][2]) ||
        (grid[0][2] === mark && grid[1][1] === mark && grid[2][0])){
          this.winner = `${mark} won!`;
        }
    return this.winner;
  }

  isOver(){
    if (this.isWon('o') || this.isWon('x')) return true;
    let flattned = [].concat.apply([], this.innerBoard);
    if(flattned.every( sqr => sqr != null)){
      this.winner= "It's a tie";
    }
    return this.winner;
  }

  dup(){
    let newBoard = new Board()
    newBoard.innerBoard = this.innerBoard.map( arr => arr.slice() )
    newBoard.squares = this.squares.slice();
    return newBoard;
  }

}

export default Board;
