import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';
import GeniusComputer from './genious_computer_player';

class Game extends React.Component {
  constructor(){
    super()
    this.computersTurn = false
    this.board = new Board();
    this.computerPlayer =  new GeniusComputer()
  }

  processGuess(i, pos){
    if(this.board.squares[i] != " " || this.board.winner) return;
    this.board.squares[i]= this.board.mark;
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark;
    if (this.board.isWon(this.board.mark) || this.board.isOver() ) {
      setTimeout( this.board.resetGame.bind(this) , 1000);
    }
    if(!this.board.winner) this.board.mark = (this.board.mark == 'x' ? 'o' : 'x');
    this.forceUpdate()
    this.computersTurn = !this.computersTurn
    if(this.computersTurn) return this.processComputerGuess();

  }

  handleClick(e){

    let i = e.target.className[0]
    let pos = this.board.coord_map[i];
    this.processGuess(i, pos)

  }

  processComputerGuess(){
    let i = this.computerPlayer.makeMove(this.board, this.mark);
    let pos = this.board.coord_map[i];
    this.processGuess(i, pos)
  }

  render(){

    return(
      <ul id="board">
        {this.board.squares.map((sqr, i) => {
          let className;
          if(this.board.winningMark){
             className = this.board.squares[i] === this.board.winningMark ? 'winner': 'gibberish'
          }
          return <li
            key={`${sqr, i}`}
            id="sqr"
            className={`${i}:sqr ${className}`}
            onClick={this.handleClick.bind(this)}>
            <p>{this.board.squares[i]}</p>
          </li>
        })}
      </ul>)
    }
  }

export default Game;
