// const moves = [
//   [2, 1],
//   [2, -1],
//   [-2, 1],
//   [-2, -1],
//   [1, 2],
//   [1, -2],
//   [-1, 2],
//   [-1, -2],
// ];

function possibleMoves(currentPosition) {
  function outOfBoard(move) {
    if (move[0] > 7 || move[1] > 7 || move[0] < 0 || move[1] < 0) {
      return null;
    } else {
      return move;
    }
  }

  let move1 = outOfBoard([currentPosition[0] + 2, currentPosition[1] + 1]);
  let move2 = outOfBoard([currentPosition[0] + 2, currentPosition[1] - 1]);
  let move3 = outOfBoard([currentPosition[0] - 2, currentPosition[1] + 1]);
  let move4 = outOfBoard([currentPosition[0] - 2, currentPosition[1] - 1]);
  let move5 = outOfBoard([currentPosition[0] + 1, currentPosition[1] + 2]);
  let move6 = outOfBoard([currentPosition[0] + 1, currentPosition[1] - 2]);
  let move7 = outOfBoard([currentPosition[0] - 1, currentPosition[1] + 2]);
  let move8 = outOfBoard([currentPosition[0] - 1, currentPosition[1] - 2]);

  return { move1, move2, move3, move4, move2, move5, move6, move7, move8 };
}

let initialMove = possibleMoves([3, 3]);

console.log(initialMove);
