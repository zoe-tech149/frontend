const board = Array.from({length:25}, () => false);

const gameBoard = document.querySelector("#game-board");

for (let i = 0; i < board.length; i++) {

  const tile = document.createElement("button");

  tile.className = "tile";

  gameBoard.appendChild(tile);

  if (board[i] === true) {
    tile.classList.remove("is-off");
    tile.classList.add("is-on");
    } else {
    tile.classList.remove("is-on");
    tile.classList.add("is-off");
  }
}