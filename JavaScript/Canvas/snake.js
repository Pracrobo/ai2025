const GAME_SPEED = 300; // 화면 갱신 주기(ms)
const BLOCK_SIZE = 20;
let snake = {x: 0, y : 0}; //뱀의 시작 위치
let food = {x : 100, y: 200};
let direction = 'right'; // 초기 이동 방향
let canvas;
let context;

window.onload = initialize;
// DOM과 각종 필요한 여러 컴포넌트 로딩이 끝난 이루 실행

function initialize () {
    canvas = document.getElementById('snakeCanvas');
    context = canvas.getContext('2d');
 //키 이벤트 리스너 추가
    setupEventListener();
 //게임 시작 루프 호출
    setInterval(gameLoop, GAME_SPEED);

}
function keyHandler(event) {   
    switch(event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
}

function setupEventListener() {
    document.addEventListener('keydown', keyHandler);
}


function gameLoop() {
    // 뱀 이동
    moveSnake();
    // 화면 렌더링
    draw();
}
//뱀의 위치를 이동한다
function moveSnake() {
    switch (direction) {
        case'up':
            snake.y -= BLOCK_SIZE;
            break;
        
        case 'down':
            snake.y += BLOCK_SIZE;
            break;
        
        case 'left':
            snake.x -= BLOCK_SIZE;
            break;
        
        case 'right':
            snake.x += BLOCK_SIZE;
            break;
    }
    // snake.x += BLOCK_SIZE;
    // snake.y += BLOCK_SIZE;
    //화면 벗어나지 않게 오른 쪽 끝 ->왼쪽 끝으로 나오기(nice versa)
    //                              -> 위로 

    // 화면을 벗어나지 않는 랜덤 위치에 빨간 사과(먹이)를 먹는다.
    if (snake.x > canvas.width) {
        snake.x = 0;
    }
    if( snake.x < 0) {
        snake.x = canvas.width;
    }

    if (snake.y > canvas.height) {
        snake.y = 0;
    }
    if( snake.y < 0) {
        snake.y = canvas.height;
    }
    // 숙제 (옵셔널)
    // 사과 먹고, 빨란 박스(사과)와 나의 머리 위치가 같으면 다시 2번을 재실행(랜덤 위치에 먹이 배치)

    // 숙제 (옵셔널2)
    // 3번에 대해서 사과를 먹은 이후 몸길이는 늘려 나를 따라오게한다.
    // 나의 몸의 길이를 배열에 넣기
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //화면에 뱀을 그린다.
    context.fillStyle = 'green';
    context.fillRect(snake.x, snake.y, BLOCK_SIZE, BLOCK_SIZE);
    // 사과 그리기
    if(snake.x === food.x && snake.y === food.y) {
        food.x = Math.floor(Math.random() * canvas.width / BLOCK_SIZE) * BLOCK_SIZE;
    }
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, BLOCK_SIZE, BLOCK_SIZE);
}