const canvas = document.getElementById('board');
const cxt = canvas.getContext('2d');

// Calculate size of canvas from constants.
cxt.canvas.width = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
cxt.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();
    console.table(board.grid);
}