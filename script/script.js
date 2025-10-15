const character = document.getElementById("character");
const enemy = document.getElementById("enemy");

// Enemy beweegt naar links
setInterval(() => {
  enemy.style.left = (parseInt(enemy.style.left) - 1) + "px";
}, 10);

let isJumping = false;
let jumpHeight = 120; // hoe hoog
let jumpSpeed = 5;    // kleiner is sneller
let gravity = 5;      // hoe snel het valt
let groundY = 541;    // Grond positie

document.addEventListener('keydown', event => {
  if (event.key === "w" || event.key === "W") {
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

      // fall down
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
