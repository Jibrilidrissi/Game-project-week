const character = document.getElementById("character");
const enemy = document.getElementById("enemy");
const enemy1 = document.getElementById("enemy1");


// startpositie enemy 
let enemyX = 1900;
enemy.style.left = enemyX + "px";

// beweeg enemy automatisch naar links
setInterval(() => {
  enemyX -= 12;
  if (enemyX < 90) {
    enemyX = 1700;
  }
  enemy.style.left = enemyX + "px";
}, 20);

// startpositie enemy1
let enemy1X = 2500;
enemy1.style.left = enemy1X + "px";

// beweeg enemy1 automatisch naar links
setInterval(() => {
  enemy1X -= 10;
  if (enemy1X < 100) {
    enemy1X = 1500;
  }
  enemy1.style.left = enemy1X + "px";

  // 🔥 check collision here every frame
  checkCollision();
}, 20);

// jump variables
let isJumping = false;
let jumpHeight = 190;
let jumpSpeed = 5;
let gravity = 4;
let groundY = 571;

document.addEventListener('keydown', event => {
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

      // vallen
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



 let score = 0;
 let highscore = localStorage.getItem("Highscore") || 0;

const scoreboard = document.getElementById("scoreboard"); 

function updateScoreboard() {
  scoreboard.textContent = `Score: ${score} Highscore: ${highscore}`;
}
  setInterval(() => {
    score +=1;
    if (score >highscore){
      higscore = score;
      localStorage.getItem("Highscore", highscore)
    }
updateScoreboard();
}, 50);


 
