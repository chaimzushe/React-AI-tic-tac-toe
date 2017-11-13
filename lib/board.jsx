import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component{

  initialize(){

  }


  render(){
    this.state = {
      squares: [1,2,3,4,5,6,7,8,9]
    }
    return(
    <ul id="board">
      {this.state.squares.map((sqr, i) => {

        return <li
          key={`${sqr, i}`}
          id="sqr"
          className={`sqr:${sqr}`}>
          <p></p>
        </li>
      })}
    </ul>)
  }
}

export default Board;
