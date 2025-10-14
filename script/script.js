const stick = document.getElementById("stick");
console.log(stick)
document.addEventListener('keydown', event => {
  movestick(event.key)
});

function movestick(key) 
{
  if ((key == "w" || key == "W")) 
  {
    stick.style.top = (parseInt(stick.style.top) - 10) + "px";
    console.log("UP")
  }
  else if (key == "s" || key == "S")
  {
    stick.style.top = (parseInt(stick.style.top) + 10) + "px";
    console.log("DOWN")
  }
  else if ((key == "a" || key == "A") && parseInt(stick.style.left) > 0 )
  {
    stick.style.left = (parseInt(stick.style.left) - 10) + "px";
    console.log("LEFT")
  }
  else if ((key == "d" || key == "D")  && parseInt(stick.style.left) < 550 )
  {
    stick.style.left = (parseInt(stick.style.left) + 10) + "px";
    console.log("RIGHT")
  }


}