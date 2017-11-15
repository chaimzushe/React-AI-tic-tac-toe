import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';
import GeniusComputer from './genious_computer_player';

class Game extends React.Component {
  constructor(){
    super()
    this.computersTurn = false;
    this.board = new Board();
    this.computerPlayer =  new GeniusComputer();
  }

  processGuess(i, pos){
  // dont let interaction if trying to click a not-emptysquare or if the game is over
    if(this.board.squares[i] != " " || this.board.winner) return;
    this.board.squares[i] = this.board.mark; // mark the square for display.
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark; // mark the inner board for chekcing for win.
    this.forceUpdate() // force a re-rended for changing the squares.
    if (this.board.isOver()) { // notify abd reset if game is over because of this move.
      setTimeout( alert.bind(null, "game over") , 2000);
    } else{
       this.board.mark = (this.board.mark == 'x' ? 'o' : 'x'); // swap mark for next player
       this.computersTurn = !this.computersTurn  // toggle computers turn.
       if(this.computersTurn) return this.processComputerGuess();// give the computer a chance to guess.
    }
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
