import React from 'react';
import ReactDOM from 'react-dom';
import Board from  './board';
import GeniusComputer from './genious_computer_player';

class Game extends React.Component {
  constructor(){
    super()
    this.computersTurn = false;

    this.computerPlayer = new GeniusComputer();
    this.state = {
      modal: true,
    }
    this.board = new Board()
  }


  startComputerFirst(){
    this.board = new Board()
    this.computersTurn = true;
    this.getComputerGuess()
  }

  processGuess(i, pos){
    // dont let interaction if trying to click a not-empty square or if the game is over
    this.board.squares[i] = this.board.mark; // mark the square for display.
    this.board.innerBoard[pos[0]][pos[1]] = this.board.mark; // mark the inner board for checking for win.
    this.computersTurn = !this.computersTurn;
    this.board.mark = (this.board.mark == 'x' ? 'o' : 'x');
    if(this.computersTurn) this.getComputerGuess();
    this.forceUpdate()
    if (this.board.isOver()) setTimeout( this.restartGame.bind(Game), 2000);

  }

  restartGame(){
    location.reload()
  }

  handleClick(e){

    let i = e.target.className[0] // grab the square clicked on by looking at its id.
    debugger
    if(this.board.squares[i] != " " || this.board.isOver()) return;
    let pos = this.board.coord_map[i]; // find out its position in the inner grid.

    this.processGuess(i, pos)
  }

  getComputerGuess(){
    if (!this.computerPlayer) this.computerPlayer =  new GeniusComputer();
    if(this.state.opponent != "c" || this.board.isOver()) return;
    let i = this.computerPlayer.makeMove(this.board, this.board.mark);
    let pos = this.board.coord_map[i];
    this.computersTurn = true;
    this.processGuess(i, pos)
  }

  renderBoard(){

    const button = this.state.opponent === 'c' ? <button onClick={this.startComputerFirst.bind(this)}>computer to start </button> : "";
    return(
      <div id="board-wrap">

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
          </ul>
          {button}
        </div>)
       }

  startGame(e){
    const player2 = e.target.className.includes('laptop') ? 'c' : 'h';
    this.setState({
      board: new Board(),
      modal: false,
      opponent: player2,
      computersTurn: false,
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
    debugger
       if (this.state.modal) {
         return this.renderModal()
         } else{
           return this.renderBoard()
         }

    }
  }

export default Game;
