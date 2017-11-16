import React from 'react';



class Modal extends React.Component{
  constructor(props){
    super()
  }
  startGame(){
    this.setState({
      model: false
    })
  }
  render(){
    return(<div id="modal">
          <div className="modal-box">
            <h1 id= "modal-header">Tic Tac Toe</h1>
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
