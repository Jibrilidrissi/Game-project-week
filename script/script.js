// Elements
const character = document.getElementById("character");
const enemy = document.getElementById("enemy");
const enemy1 = document.getElementById("enemy1");
const enemy2 = document.getElementById("enemy2");
const scoreboard = document.getElementById("scoreboard");

// Enemy setup
let enemyX = 1900;
enemy.style.left = enemyX + "px";

setInterval(() => {
  enemyX -= 14;
  if (enemyX < -300) {
    enemyX = 1800;
  }
  enemy.style.left = enemyX + "px";
  checkCollision();
}, 20);

// Enemy setup
let enemy1X = 2500;
enemy1.style.left = enemy1X + "px";

setInterval(() => {
  enemy1X -= 14;
  if (enemy1X < -300) {
    enemy1X = 1800;
  }
  enemy1.style.left = enemy1X + "px";
  checkCollision();
}, 20);

// Enemy setup
let enemy2X = 3000;
enemy2.style.left = enemy2X + "px";

setInterval(() => {
  enemy2X -= 14;
  if (enemy2X < -300) {
    enemy2X = 1800;
  }
  enemy2.style.left = enemy2X + "px";
  checkCollision();
}, 20);


// Jump logic
let isJumping = false;
let jumpHeight = 190;
let jumpSpeed = 5;
let gravity = 4;
let groundY = 459;

document.addEventListener("keydown", event => {
  if (event.key === "w" || event.key === "W" || event.key === "PageUp") {
    jump();
  }
});

function jump() {
  if (isJumping) return;
  isJumping = true;

  let position = groundY;
  let upInterval = setInterval(() => {
    if (position <= groundY - jumpHeight) {
      clearInterval(upInterval);

      // Falling down
      let downInterval = setInterval(() => {
        if (position >= groundY) {
          clearInterval(downInterval);
          isJumping = false;
          position = groundY;
          character.style.top = position + "px";
        } else {
          position += gravity;
          character.style.top = position + "px";
        }
      }, jumpSpeed);
    } else {
      position -= gravity;
      character.style.top = position + "px";
    }
  }, jumpSpeed);
}







// Score + Highscore
let score = 0;
let highscore = localStorage.getItem("Highscore") || 1;

function updateScoreboard() {
  scoreboard.textContent = `Score: ${score} Highscore: ${highscore}`;
}

setInterval(() => {
  score += 1;
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("Highscore", highscore);
  }
  updateScoreboard();
}, 50);

// Collision detection 
function checkCollision() {
  const charRect = character.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();
  const enemy1Rect = enemy1.getBoundingClientRect();
  const enemy2Rect = enemy2.getBoundingClientRect();

  // Collision with enemy
  if (
    charRect.left < enemyRect.right &&
    charRect.right > enemyRect.left &&
    charRect.top < enemyRect.bottom &&
    charRect.bottom > enemyRect.top
  ) {
    gameOver();
  }

  // Collision with enemy1
  if (
    charRect.left < enemy1Rect.right &&
    charRect.right > enemy1Rect.left &&
    charRect.top < enemy1Rect.bottom &&
    charRect.bottom > enemy1Rect.top
  ) {
    gameOver();
  }

  // Collision with enemy2
  if (
    charRect.left < enemy2Rect.right &&
    charRect.right > enemy2Rect.left &&
    charRect.top < enemy2Rect.bottom &&
    charRect.bottom > enemy2Rect.top
  ) {
    gameOver();
  }
}


function gameOver() {
  alert("💥 Game Over!");
  resetGame();
}

function resetGame() {
  // Reset enemy positions
  enemyX = 1900;
  enemy.style.left = enemyX + "px";
  enemy1X = 2500;
  enemy1.style.left = enemy1X + "px";
  enemy2X = 3000;
  enemy2.style.left = enemy2X + "px";

  // Optionally reset score
  score = 0;
  updateScoreboard();
}