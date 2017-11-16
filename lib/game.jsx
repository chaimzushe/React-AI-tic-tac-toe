import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';
import GeniusComputer from './genious_computer_player';
import Modal from './modal';

class Game extends React.Component {
  constructor(){
    super()
    this.state = {
      model: true,
    }
    this.board = new Board();
    this.computerPlayer =  new GeniusComputer();
    this.computersTurn = true;
    this.getComputerGuess()
  }

  processGuess(i, pos){
  // dont let interaction if trying to click a not-emptysquare or if the game is over
    if(this.board.squares[i] != " " || this.board.winner) return;
    this.board.squares[i] = this.board.mark; // mark the square for display.
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark; // mark the inner board for chekcing for win.
   // force a re-rended for changing the squares.
    if (this.board.isOver()) { // notify abd reset if game is over because of this move.

      setTimeout( alert.bind(null, "Game over!" ), 2000);
    } else{
       this.board.mark = (this.board.mark == 'x' ? 'o' : 'x'); // swap mark for next player
       this.computersTurn = !this.computersTurn  // toggle computers turn.
      if(this.computersTurn) return this.getComputerGuess(); // give the computer a chance to guess, if hid turn.
     }
  }

  handleClick(e){
    let i = e.target.className[0] // grab the square clicked on by looking at its id.
    let pos = this.board.coord_map[i]; // find out its position in the inner grid.
    this.processGuess(i, pos)
  }

  getComputerGuess(){
    let i = this.computerPlayer.makeMove(this.board, this.board.mark);
    let pos = this.board.coord_map[i];
    this.processGuess(i, pos)
  }

  render(){
    return(
      <ul id="board">
        <Modal/>
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
