import TicTacToeNode from './tic_tac_toe_node';

class GeniusComputer {

  makeMove(board){
    let mark = board.mark;
    let node = new TicTacToeNode(board, mark)
    let possibleMoves = node.children()
    let winnerNode = possibleMoves.find(child => child.winningNode(mark));
    debugger;
    if (winnerNode) return winnerNode.position;
    let losingNode = possibleMoves.find(child => !child.losingNode(mark));
    return losingNode.position
    //document.getElementById('elementID').click();
  }


}

export default GeniusComputer
