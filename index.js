import { Snake } from './snake.js';
import { generateFood } from './food.js';
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');

const snake = new Snake();
const canvasHeight = 200;
const canvasWidth = 200;
let food = generateFood(canvasWidth, canvasHeight, snake);

document.addEventListener('keydown', event => {
  if (event.keyCode == 37) {
    //left arrow
    snake.dx = -1;
    snake.dy = 0;
  } else if (event.keyCode == 38) {
    //up arrow
    snake.dy = -1;
    snake.dx = 0;
  } else if (event.keyCode == 39) {
    //right arrow
    snake.dx = 1;
    snake.dy = 0;
  } else if (event.keyCode == 40) {
    //down arrow
    snake.dx = 1;
    snake.dy = 0;
  }
});

function updateSnake() {
  snake.updateSnake(canvas);
}

function showSnake() {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  snake.showSnake(canvas);
  canvas.fillStyle = 'red';
  canvas.fillRect(food.x, food.y, snake.width, snake.height);
}

setInterval(() => {
  updateSnake();
  showSnake();
}, 500);
