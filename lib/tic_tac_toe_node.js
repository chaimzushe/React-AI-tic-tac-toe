
class TicTacToeNode {

  constructor(board, nextMark, position){
    this.board = board;
    this.nextMark = nextMark;
    this.position = position;
  }

  losingNode(evalMark){

    if(this.board.isOver()){
      return !this.board.winner.includes("tie") && this.board.winner[0] != evalMark
    }
    if (this.nextMark === evalMark){
      return this.children().every( node => node.losingNode(evalMark) )
    } else{
      return this.children().some( node => node.losingNode(evalMark) )
    }
  }

  winningNode(evalMark){
    if(this.board.isOver()){
      
      return this.board.winner[0] === evalMark
    }
    if(this.nextMark === evalMark){
      let re =  this.children().some( node => node.winningNode(evalMark) )
      
      return re;
    } else{
      return this.children().every( node => node.winningNode(evalMark) )
    }
  }



  children(){
    let childrenNodes = [];
    for (var i = 0; i < this.board.squares.length; i++) {
      let sqr = this.board.squares[i]
      if (sqr !== " ") continue;
      let newBoard = this.board.dup()
      newBoard.squares[i] = this.nextMark;
      let pos = this.board.coord_map[i];
      newBoard.innerBoard[pos[0]][pos[1]] = this.nextMark;
      let newMark = (this.nextMark === 'x' ? 'o' : 'x');
      let newNode =  new TicTacToeNode(newBoard, newMark, i);
      childrenNodes.push(newNode)
    }

    return childrenNodes;
  }

}
export default TicTacToeNode
