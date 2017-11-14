import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';

class Game extends React.Component {
  constructor(){
    super()
    this.board = new Board(false)

  }

  handleClick(e){
    if(e.target.innerText != "" || this.board.winner) return;
    debugger
    let i = e.target.className[0]
    let pos = this.board.coord_map[e.target.className[0]];
    this.board.squares[i]= this.board.mark;
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark;
    if (this.board.isWon(this.board.mark) || this.board.isOver() ) {
      setTimeout( this.board.resetGame.bind(this) , 1000);

    }
    if(!this.board.winner) this.board.mark = (this.board.mark == 'x' ? 'o' : 'x');
    this.forceUpdate()
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
