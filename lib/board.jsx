import React from 'react';
import ReactDOM from 'react-dom';
let _ = require('lodash');

class Board extends React.Component{

  constructor(){

    super()
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
    this.state = {
      innerBoard: [[null,null,null], [null,null,null], [null,null,null] ],
      squares: [" ", " ", " "," "," "," "," "," "," "],
      winner: null,
      winningMark: null
    }
    this.mark =  "x"
  }

  handleClick(e){
    if(e.target.innerText != "" || this.state.winner) return;
    let i = e.target.className[0]
    let pos = this.coord_map[e.target.className[0]];
    this.state.innerBoard[pos[0]][pos[1]] = this.mark;
    let new_squares =  this.state.squares.slice()
    new_squares[i] = this.mark;
    this.setState({ squares: new_squares })
    if (this.isWon(this.mark) || this.isOver() ) {
      setTimeout( this.resetGame.bind(this) , 5000);
    }
    if(!this.state.winner) this.mark = (this.mark == 'x' ? 'o' : 'x');
}

resetGame(winningMark){

  this.setState({
    innerBoard: [[null,null,null], [null,null,null], [null,null,null] ],
    squares: [" ", " ", " "," "," "," "," "," "," "],
    winner: null,
    winningMark: null
  })


}

  isWon(mark){

    let grid = this.state.innerBoard
    let transposed = _.zip.apply(_, grid )
    if (grid.some(row => row.every((el) => el === mark)) ||
        transposed.some(row => row.every((el) => el === mark)) ||
        (grid[0][0] === mark && grid[1][1] === mark && grid[2][2]) ||
        (grid[0][2] === mark && grid[1][1] === mark && grid[2][0])){
          this.state.winningMark = this.mark
          this.state.winner = `Winner is ${mark}`;
        }
        return this.state.winner;
  }

  isOver(){
    if (this.state.winner) return true;
    let flattned = [].concat.apply([], this.state.innerBoard);
    if(flattned.every( sqr => sqr != null)){
      this.state.winner= "It's a tie";
    }
    return this.state.winner;
  }

  render(){

    return(
    <ul id="board">
      {this.state.squares.map((sqr, i) => {
        let className = "jibrish";
        if(this.state.winningMark && this.state.squares[i] === this.state.winningMark) {
          className = 'winner';
        }
        return <li
          key={`${sqr, i}`}
          id="sqr"
          className={`${i}:sqr ${className}`}
          onClick={this.handleClick.bind(this)}>
          <p>{this.state.squares[i]}</p>
        </li>
      })}
    </ul>)
  }
}

export default Board;
