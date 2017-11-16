import TicTacToeNode from './tic_tac_toe_node';

class GeniusComputer {

  makeMove(board){
    let mark = board.mark;
    let node = new TicTacToeNode(board, mark)
    let possibleMoves = this.shuffleNodes(node.children())
    let winnerNode = possibleMoves.find(child => child.winningNode(mark));
    ;
    if (winnerNode) return winnerNode.position;
    let losingNode = possibleMoves.find(child => !child.losingNode(mark));
    return losingNode.position
    //document.getElementById('elementID').click();
  }

  shuffleNodes(nodes) {
    for (let i = nodes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
        [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
    }
    return nodes;
  }


}

export default GeniusComputer
