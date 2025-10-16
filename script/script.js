const character = document.getElementById("character");
const enemy = document.getElementById("enemy");

// startpositie enemy (moet numeriek zijn)
let enemyX = 1200;
enemy.style.left = enemyX + "px";

// beweeg enemy automatisch naar links
setInterval(() => {
  enemyX -= 15; // snelheid aanpassen hier
  if (enemyX < -150) {
    enemyX = 1900; // reset als hij buiten beeld is
  }
  enemy.style.left = enemyX + "px";
}, 20);

let isJumping = false;
let jumpHeight = 190; // hoe hoog
let jumpSpeed = 5;    // kleiner is sneller
let gravity = 4;      // hoe snel het valt
let groundY = 541;    // Grond positie

document.addEventListener('keydown', event => {
  if (event.key === "w" || event.key === "W") {
    jump();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === "PgUp" || event.key === "Pg Up") {
    jump();
  }
});

function jump() {
  if (isJumping) return; // geen double jumps
  isJumping = true;

  let position = groundY;
  let upInterval = setInterval(() => {
    if (position <= groundY - jumpHeight) {
      clearInterval(upInterval);

      // zwaartekracht
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
const scoreboard= document.getElementById("scoreboard");
if (x + width < 0) {
    x = canvas.width;
    score += 1; // Score verhogen
  }
function increaseScore(amount= +1){
 score + amount;
 updateScoreboard();  
}
function updateScoreboard(){
  scoreboard.textContent = "Score: " + score;
}