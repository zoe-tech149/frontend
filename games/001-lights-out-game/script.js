const board = Array.from({length:25}, () => false);

for (let i = 0; i < board.length; i++) {
  const tile = document.createElement("button");

  tile.className = "tile";

  gameBoard.appendChild(tile);
}