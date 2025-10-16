const character = document.getElementById("character");
const enemy = document.getElementById("enemy");

// startpositie enemy 
let enemyX = 1900;
enemy.style.left = enemyX + "px";

// beweeg enemy automatisch naar links
setInterval(() => {
  enemyX -= 12; // snelheid aanpassen hier
  if (enemyX < 90) {
    enemyX = 1700; // reset als hij buiten beeld is
  }
  enemy.style.left = enemyX + "px";
}, 20);

// startpositie enemy1
let enemy1X = 2500;
enemy1.style.left = enemy1X + "px";

// beweeg enemy1 automatisch naar links
setInterval(() => {
  enemy1X -= 10; // snelheid aanpassen hier
  if (enemy1X < 50) {
    enemy1X = 1500; // reset als hij buiten beeld is
  }
  enemy1.style.left = enemy1X + "px";
}, 20);


let isJumping = false;
let jumpHeight = 190; // hoe hoog
let jumpSpeed = 5;    // kleiner is sneller
let gravity = 4;      // hoe snel het valt
let groundY = 571;    // Grond positie

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
const scoreboard = document.getElementById("scoreboard"); 

function updateScoreboard() {
  scoreboard.textContent = "Score: " + score;
}
  setInterval(() => {
    score +=1;
updateScoreboard();
}, 50);
  
function speelOpnieuw() {
  player.x = 50;
  player.y =240;
  player.dy = 0;
  player.grounded = true;

  obstacles = [];
  frame = 0;
  alive = true;

  document.getElementById("restartButton").style.display = "none";

  loop();
}

function loop() {
  if (!alive) {
    document.getElementById("restartButton").style.display = "block";
    return;
  }

  requestAnimationFrame(loop);
}

