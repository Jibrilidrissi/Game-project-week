setInterval(()=>enemy.style.left=(parseInt(enemy.style.left)-1)+'px',10);

const stick = document.getElementById("stick");
console.log(img)
document.addEventListener('keydown', event => {
  moveimg(event.key)
});

function moveimg(key) 
{
  if ((key == "w" || key == "W")) 
  {
    img.style.top = (parseInt(img.style.top) - 10) + "px";
    console.log("UP")
  }

}