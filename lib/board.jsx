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
    }
    this.mark =  "x"
  }

  handleClick(e){
    debugger
    if(e.target.innerText != "" || this.state.winner) return;
    let i = e.target.className[0]
    let pos = this.coord_map[e.target.className[0]];
    this.state.innerBoard[pos[0]][pos[1]] = this.mark;
    let new_squares =  this.state.squares.slice()
    new_squares[i] = this.mark;
    this.setState({ squares: new_squares });
    if (this.isWon(this.mark) || this.isOver() ) alert(`${this.state.winner}`)
    this.mark = (this.mark == 'x' ? 'o' : 'x');
  }

  isWon(mark){
    let grid = this.state.innerBoard
    let transposed = _.zip.apply(_, grid )
    if (grid.some(row => row.every((el) => el === mark)) ||
        transposed.some(row => row.every((el) => el === mark)) ||
        (grid[0][0] === mark && grid[1][1] === mark && grid[2][2]) ||
        (grid[0][2] === mark && grid[1][1] === mark && grid[2][0])){
          this.state.winner = `Winner is ${mark}`;
        }
        return this.state.winner;
  }

  isOver(){
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

        return <li
          key={`${sqr, i}`}
          id="sqr"
          className={`${i}:sqr`}
          onClick={this.handleClick.bind(this)}>
          <p>{this.state.squares[i]}</p>
        </li>
      })}
    </ul>)
  }
}

export default Board;
