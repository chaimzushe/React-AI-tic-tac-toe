
class TicTacToeNode {

  constructor(board, nextMark, position){
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

    this.board = board;
    this.nextMark = nextMark;
    this.position = position;
  }

  children(){
    let childrenNodes = [];
    this.board.forEach( (el,i) => {
      if(el === null) continue;
      
    })

  }
}

export default TicTacToeNode
