import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';
import GeniusComputer from './genious_computer_player';

class Game extends React.Component {
  constructor(){
    super()
    this.state = {
      modal: true,
    }
    this.board = new Board();
    this.computersTurn = false;
  }

  restartGame(){
    this.board = new Board();
    this.setState({
      modal: true,
    })
  }

  processGuess(i, pos){
    // dont let interaction if trying to click a not-emptysquare or if the game is over
    if (this.state.opponent === 'c' && !this.computerPlayer) this.computerPlayer =  new GeniusComputer();
    if(this.board.squares[i] != " " || this.board.winner) return;
    this.board.squares[i] = this.board.mark; // mark the square for display.
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark; // mark the inner board for checking for win.
    this.forceUpdate()  // force a render for changing the squares.

    if (this.board.isOver()) { // notify  if game is over because of this move.
      setTimeout( this.restartGame.bind(this), 2000);
    } else{
       this.board.mark = (this.board.mark == 'x' ? 'o' : 'x'); // swap mark for next player
       this.computersTurn = !this.computersTurn  // toggle computers turn.
      if(this.computersTurn && this.computerPlayer) return this.getComputerGuess(); // give the computer a chance to guess, if hid turn.
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

  renderBoard(){
    return(
          <ul id="board">
            {this.board.squares.map((sqr, i) => {
              let color = sqr === "x" ? "red" : "yellow"
              return <li
                key={`${sqr, i}`}
                id="sqr"
                className={`${i}:sqr, ${color}`}
                onClick={this.handleClick.bind(this)}>
                <p>{this.board.squares[i]}</p>
              </li>
            })}
          </ul>)
       }

  startGame(e){
    const player2 = e.target.className.includes('laptop') ? 'c' : 'h';
    debugger
    this.board = new Board();
    this.setState({
      modal: false,
      opponent: player2,
    })
  }

  renderModal(){
    return(
      <div id="modal">
        <div className="modal-box">
            <h1 id= "modal-header">Tic Tac Toe</h1>
            <p id="instuction">Select your opponent </p>
            <p className="fa fa-arrow-down" ></p>
            <div id="modal-level-wrap">
              <p className="fa fa-user"
                  onClick={this.startGame.bind(this)}>
                </p>
                <p className="fa fa-laptop"
                  onClick={this.startGame.bind(this)}>
                </p>
              </div>
            </div>
          </div>
        )
      }



  render(){
       if (this.state.modal) {
         return this.renderModal()
         } else{
           return this.renderBoard()
         }

    }
  }

export default Game;
