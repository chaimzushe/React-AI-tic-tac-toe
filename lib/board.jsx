import React from 'react';
import ReactDOM from 'react-dom';

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
    }
    this.mark =  "x"
  }

  handleClick(e){

    if(e.target.innerText != "") return;
    let pos = this.coord_map[e.target.className[0]];
    this.state.innerBoard[pos[0]][pos[1]] = this.mark;
    e.target.innerText = this.mark;
    this.mark = (this.mark == 'x' ? 'o' : 'x');
    this.isOver()
  }

  isWon(){

  }

  isOver(){
     let result = [].concat.apply([], this.state.innerBoard);
     console.log(result.every( sqr => sqr != null));
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
