//Game constants and variables
let inputDir = { x: 0, y: 0 };
const moveSound = new Audio("move.mp3");
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
let speed = 5;
let snakeArr = [{ x: 13, y: 15 }]; // position of the snakes
food = { x: 6, y: 7 }; // position of the food
let lastPaintTime = 0;
let score = 0;

// Game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        //the game is updated 5 times every second
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function collide(snake) {
    //If you bump into yourself
    for (let i = 1; i < snakeArr.length;i++ ) //loops start from 1 because the first element is the head of the snake
    {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    //If you bump into the wall
    if (
        snake[0].x >= 18 ||
        snake[0].x <= 0 ||
        snake[0].y >= 18 ||
        snake[0].y <= 0
    ) {
        return true;
    }
    return false;
}
function gameEngine() {
    //Part1 --> Updating snake and food

    if (collide(snakeArr)) {
        //if you bump into the wall or youself
        gameOverSound.play();
        inputDir = { x: 0, y: 0 };
        alert("Game Over : (Press ctrl + r to refresh the game)");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0; // scor ise
    }

    //If you have eaten yhe food , regenate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score++;
        if (score > hiscore) {
            hiscore = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscore));
            hiscorebox.innerHTML = "High Score:" + hiscore;
        }
        scorebox.innerHTML = "Score:" + score;
        snakeArr.unshift({
            x: snakeArr[0].x + inputDir.x,
            y: snakeArr[0].y + inputDir.y,
        });
        let a = 2, b = 16;
        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random()),
        };
    }

    //Move to Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }//let i = snakeArr.length - 2 --> snakes tail
    // ...snakeArr[i] --> allows the snake's body to follow each other

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Part2 -->Display / Rander snake and food

    //Display snake
    playArea.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add("head");
        } else {
            snakeElement.classList.add("snake");
        }
        playArea.appendChild(snakeElement); //snakeElement is added to playArea
    });

    //Display food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    playArea.appendChild(foodElement);
}

// Main logic behind running the game
let hiscore = localStorage.getItem("hiscore");

if (hiscore === null) {
    hiscore = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscore));
} else {
    hiscore = JSON.parse(hiscore);
    hiscorebox.innerHTML = "High Score:" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
    inputDir = { x: 0, y: 1 };
    switch (e.key) {
        case "ArrowUp":
            console.log("Arrow Up");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("Arrow Down");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("Arrow Left");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("Arrow Right");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});
