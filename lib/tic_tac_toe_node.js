
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
      this.children().every( node => node.losingNode(evalMark) )
    } else{
      this.children().some( node => node.losingNode(evalMark) )
    }
  }

  winningNode(evalMark){
    if(this.board.isOver()){
      return this.board.winner[0] === evalMark
    }
    if(this.nextMark === evalMark){
      this.children().some( node => node.winningNode(evalMark) )
    } else{
      this.children().every( node => node.winningNode(evalMark) )
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
      this.board.innerBoard[pos[0]][pos[1]] = this.nextMark;
      let newMark = (this.board.mark == 'x' ? 'o' : 'x');
      let newNode =  new TicTacToeNode(newBoard, newMark, i);
      childrenNodes.push(newNode)
    }

    return childrenNodes;
  }

}
export default TicTacToeNode
