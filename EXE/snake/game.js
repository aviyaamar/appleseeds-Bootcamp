import {update as updateSnake,  draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let lasstRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if(gameOver){
        if(confirm('you Lost, press ok to restart')){
            window.location= '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lasstRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lasstRenderTime = currentTime;
update();
draw();

}
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();

}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);

}
function checkDeath(){
    gameOver =  outsideGrid(getSnakeHead()) || snakIntersection();
}