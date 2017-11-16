import React from 'react';



class Modal extends React.Component{
  constructor(props){
    super()
    this.startGame = this.startGame.bind(this);
  }
  startGame(){
    this.setState({
      modal: false
    })
    debugger
    location.reload();
  }
  render(){
    debugger
    return(<div id="modal">
          <div className="modal-box">
            <h1 id= "modal-header">Tic Tac Toe</h1>
            <p id="instuction">Select your opponent </p>
            <p className="fa fa-arrow-down" ></p>
            <div id="modal-level-wrap">
              <p className="fa fa-user"
                onClick={this.startGame}>
                </p>
              <p className="fa fa-laptop chosen"
                onClick={this.startGame}>
              </p>
            </div>
          </div>
        </div>
    )
  }
}

export default Modal;
