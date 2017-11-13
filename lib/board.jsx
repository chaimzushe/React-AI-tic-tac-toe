import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component{

  constructor(){
    super()
    this.state = {
      squares: [" ", " ", " "," "," "," "," "," "," "],
    }
    this.mark =  "x"
  }

  handleClick(e){

    if(e.target.innerText != "") return;
    e.target.innerText = this.mark;
    this.mark = (this.mark == 'x' ? 'o' : 'x');
  }

  render(){

    return(
    <ul id="board">
      {this.state.squares.map((sqr, i) => {

        return <li
          key={`${sqr, i}`}
          id="sqr"
          className={`sqr:${sqr}`}
          onClick={this.handleClick.bind(this)}>
          <p>{this.state.squares[i]}</p>
        </li>
      })}
    </ul>)
  }
}

export default Board;
