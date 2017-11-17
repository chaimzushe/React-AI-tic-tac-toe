# Tic Tac Toe

[Live link](https://chaimzushe.github.io/React-tic-tac-toe/)


### Features

  - An unbeatable computer AI. **If you win my computers AI, please send me an email with the positions you used to achieve the win, and a way to pay you. I will pay you $5000.00. I promise!**    

  - Option to play against another human

  - All built using React components

  <img width="714" alt="screen shot 2017-11-17 at 12 32 38 pm" src="https://user-images.githubusercontent.com/20543351/32960603-85dd9c8a-cb93-11e7-9478-dfd3fb8b6815.png">

### Rules

Since the goal is to get 3 in a row, each person must switch taking turns, first X, then O. Players must use the board given to them, they cannot add extra sides on to the board. In order to win, the 3 letters must all connect in a straight line in one direction, up or down, left or right, or diagonally.



### History of the game

According to Claudia Zaslavsky's book Tic Tac Toe: And Other Three-In-A Row Games from Ancient Egypt to the Modern Computer, tic-tac-toe could be traced back to ancient Egypt. Another closely related ancient game is Three Men's Morris which is also played on a simple grid and requires three pieces in a row to finish.

An early variation of tic-tac-toe was played in the Roman Empire, around the first century BC. It was called terni lapilli (three pebbles at a time) and instead of having any number of pieces, each player only had three, thus they had to move them around to empty spaces to keep playing. The game's grid markings have been found chalked all over Rome.

The different names of the game are more recent. The first print reference to "noughts and crosses", the British name, appeared in 1864. In his novel Can You Forgive Her? (1864) Anthony Trollope refers to a clerk playing "tit-tat-toe". The first print reference to a game called "tick-tack-toe" occurred in 1884, but referred to "a children's game played on a slate, consisting in trying with the eyes shut to bring the pencil down on one of the numbers of a set, the number hit being scored". "Tic-tac-toe" may also derive from "tick-tack", the name of an old version of backgammon first described in 1558. The U.S. renaming of "noughts and crosses" as "tic-tac-toe" occurred in the 20th century.

In 1952, OXO (or Noughts and Crosses), developed by British computer scientist Alexander S. Douglas for the EDSAC computer at the University of Cambridge, became one of the first known video games. The computer player could play perfect games of tic-tac-toe against a human opponent.

In 1975, tic-tac-toe was also used by MIT students to demonstrate the computational power of Tinkertoy elements. The Tinkertoy computer, made out of (almost) only Tinkertoys, is able to play tic-tac-toe perfectly. It is currently on display at the Museum of Science, Boston.


### Combinatorics
When considering only the state of the board, and after taking into account board symmetries (i.e. rotations and reflections), there are only 138 terminal board positions. Assuming that X makes the first move every time:

- 91 distinct positions are won by (X)
- 44 distinct positions are won by (O)
- 3 distinct positions are drawn (also known as a cat's game)

### Strategy

Optimal strategy for player X. In each grid, the shaded red X denotes the optimal move, and the location of O's next move gives the next subgrid to examine. Note that only two sequences of moves by O (both starting with center, top-right, left-mid) lead to a draw, with the remaining sequences leading to wins from X.

Optimal strategy for player O. Player O can always force a win or draw by taking center. If it is taken by X, then O must take a corner
A player can play a perfect game of tic-tac-toe (to win or, at least, draw) if they choose the first available move from the following list, each turn, as used in Newell and Simon's 1972 tic-tac-toe program.

1. Win: If the player has two in a row, they can place a third to get three in a row.
2. Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.
3. Fork: Create an opportunity where the player has two threats to win (two non-blocked lines of 2).
4. Blocking an opponent's fork:

     Option 1: The player should create two in a row to force the opponent into defending, as long as it doesn't result in them - -  creating a fork. For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner in order to win. (Playing a corner in this scenario creates a fork for "X" to win.)

    Option 2: If there is a configuration where the opponent can fork, the player should block that fork.

4. Center: A player marks the center. (If it is the first move of the game, playing on a corner gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)
5. Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
6. Empty corner: The player plays in a corner square.
7. Empty side: The player plays in a middle square on any of the 4 sides.

The first player, who shall be designated "X", has 3 possible positions to mark during the first turn. Superficially, it might seem that there are 9 possible positions, corresponding to the 9 squares in the grid. However, by rotating the board, we will find that in the first turn, every corner mark is strategically equivalent to every other corner mark. The same is true of every edge (side middle) mark. For strategy purposes, there are therefore only three possible first marks: corner, edge, or center. Player X can win or force a draw from any of these starting marks; however, playing the corner gives the opponent the smallest choice of squares which must be played to avoid losing. This makes the corner the best opening move for X, when the opponent is not a perfect player.

The second player, who shall be designated "O", must respond to X's opening mark in such a way as to avoid the forced win. Player O must always respond to a corner opening with a center mark, and to a center opening with a corner mark. An edge opening must be answered either with a center mark, a corner mark next to the X, or an edge mark opposite the X. Any other responses will allow X to force the win. Once the opening is completed, O's task is to follow the above list of priorities in order to force the draw, or else to gain a win if X makes a weak play.

More detailedly, to guarantee a draw, O should adopt the following strategies:

If X plays corner opening move (best move for them), O should take center, and then an edge, forcing X to block in the next move. This will stop any forks from happening. When both X and O are perfect players and X chooses to start by marking a corner, O takes the center, and X takes the corner opposite the original. In that case, O is free to choose any edge as its second move. However, if X is not a perfect player and has played a corner and then an edge, O should not play the opposite edge as its second move, because then X is not forced to block in the next move and can fork.
If X plays edge opening move, O should take center or corner, and then follow the above list of priorities, mainly paying attention to block forks.
If X plays center opening move, O should take corner, and then follow the above list of priorities, mainly paying attention to block forks.
When X plays corner first (best move for them), and O is not a perfect player, the following may happen:

If O responds with a center mark (best move for them), a perfect X player will take the corner opposite the original. Then O should play an edge. However, if O plays a corner as its second move, a perfect X player will mark the remaining corner, blocking O's 3-in-a-row and making their own fork.
If O responds with a corner mark, X is guaranteed to win, by simply taking any of the other two corners and then the last, a fork. (since when X takes the third corner, O can only take the position between the two X's. Then X can take the only remaining corner to win)
If O responds with an edge mark, X is guaranteed to win, by taking center, then O can only take the corner opposite the corner which X plays first. Finally, X can take a corner to create a fork and then X will win on the next move.



###### for further reading, see [this article in wikipedia.](https://en.wikipedia.org/wiki/Tic-tac-toe)    
