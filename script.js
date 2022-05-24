
let player1Y = 50;
let player1X = 50;
let player2Y = 50;
let player2X = 50;
let targetX;
let targetY;
let user1Score = 0;
let user2Score = 0;
document.body.onkeydown = (e) =>{
    if(e.keyCode == 38)
    {
        player1Y--;
      player1.style.top = player1Y + '%';
      checkWinner();
   
    } 
   else  if(e.keyCode == 40)
    {
        player1Y++;
      player1.style.top = player1Y + '%';
      checkWinner();
    }
    else  if(e.keyCode == 37)
    {
        player1X--;
      player1.style.left = player1X + '%';
      checkWinner();
    }
    else  if(e.keyCode == 39)
    {
        player1X++;
      player1.style.left = player1X + '%';
      checkWinner();
    }
    else  if(e.keyCode == 87)
    {
        player2Y--;
      player2.style.top = player2Y + '%';
      checkWinner();
    }
    else  if(e.keyCode == 83)
    {
        player2Y++;
      player2.style.top = player2Y + '%';
      checkWinner();
    }
    else  if(e.keyCode == 65)
    {
        player2X--;
      player2.style.left = player2X + '%';
      checkWinner();
    }
    else  if(e.keyCode == 68)
    {
        player2X++;
      player2.style.left = player2X + '%';
      checkWinner();
    }
    function teleport(){
      if(player1Y === 4)
      {
        player1Y = 96;
      }
     else if(player1X === 4)
      {
        player1X = 96;
      }
    else  if(player2Y === 4)
      {
        player2Y = 96;
      }
    else  if(player2X === 4)
      {
        player2X = 96;
      }
      
     else if(player1Y === 96)
      {
        player1Y = 4;
      }
     else if(player1X === 96)
      {
        player1X = 4;
      }
    else  if(player2Y === 96)
      {
        player2Y = 4;
      }
    else  if(player2X === 96)
      {
        player2X = 4;
      }
    }
    teleport();

}
function setRandom(){
    targetX= Math.floor(Math.random()*100);
    targetY= Math.floor(Math.random()*100);
    target.style.top = targetY + '%';
    target.style.left = targetX + '%';

}
setRandom();
function checkWinner(){
    if(targetX === player1X && targetY === player1Y)
    {
      user1Score++;
      score__player1.innerText = user1Score;
      setRandom();

    }
    else if(targetX === player2X && targetY === player2Y){
       user2Score++;
       score__player2.innerText = user2Score;
       setRandom();
    }
}
setTimeout(function(){
    target.style.opacity = 1;
    
},3000)
function setColor(){
  color1Red.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'red';
    color1Red.style.border = `2px solid #fff`;
  }
  color1Blue.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'blue';
    color1Blue.style.border = `2px solid #fff`;
  }
  color1Yellow.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'yellow';
    color1Yellow.style.border = `2px solid #fff`;
  }
  color1Black.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'black';
    color1Black.style.border = `2px solid #fff`;
  }
  color1Pink.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'pink';
    color1Pink.style.border = `2px solid #fff`;
  }
  color1Orange.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'orange';
    color1Orange.style.border = `2px solid #fff`;
  }
  color1Green.onclick = function()
  {
    clearColor1();
    player1.style.backgroundColor = 'green';
    color1Green.style.border = `2px solid #fff`;
  }
  color1Grad1.onclick = function()
  {
    clearColor1();
    player1.style.background = 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
    color1Grad1.style.border = `2px solid #fff`;
  }
  color1Grad2.onclick = function()
  {
    clearColor1();
    player1.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,200,27,1) 73%, rgba(0,212,255,1) 99%)';
    color1Grad2.style.border = `2px solid #fff`;
  }
  color2Red.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'red';
    color2Red.style.border = `2px solid #fff`;
  }
  color2Blue.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'blue';
    color2Blue.style.border = `2px solid #fff`;
  }
  color2Yellow.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'yellow';
    color2Yellow.style.border = `2px solid #fff`;
  }
  color2Black.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'black';
    color2Black.style.border = `2px solid #fff`;
  }
  color2Pink.onclick = function()
  {
    clearColor2();
    player1.style.backgroundColor = 'pink';
    color2Pink.style.border = `2px solid #fff`;
  }
  color2Orange.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'orange';
    color2Orange.style.border = `2px solid #fff`;
  }
  color2Green.onclick = function()
  {
    clearColor2();
    player2.style.backgroundColor = 'green';
    color2Green.style.border = `2px solid #fff`;
  }
  color2Grad1.onclick = function()
  {
    clearColor2();
    player2.style.background = 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
    color2Grad1.style.border = `2px solid #fff`;
  }
  color2Grad2.onclick = function()
  {
    clearColor2();
    player2.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,200,27,1) 73%, rgba(0,212,255,1) 99%)';
    color2Grad2.style.border = `2px solid #fff`;
  }
 
  
}
setColor();
function clearColor1(){
  color1Red.style.border = 'none';
  color1Blue.style.border = 'none';
  color1Yellow.style.border = 'none';
  color1Black.style.border = 'none';
  color1Pink.style.border = 'none';
  color1Orange.style.border = 'none';
  color1Green.style.border = 'none';
  color1Grad1.style.border = 'none';
  color1Grad2.style.border = 'none';
}
function clearColor2(){
  color2Red.style.border = 'none';
  color2Blue.style.border = 'none';
  color2Yellow.style.border = 'none';
  color2Black.style.border = 'none';
  color2Pink.style.border = 'none';
  color2Orange.style.border = 'none';
  color2Green.style.border = 'none';
  color2Grad1.style.border = 'none';
  color2Grad2.style.border = 'none';
}
function nickNames(){
userCheck1.onclick = function(){
  if(usernick1.value != "")
  {
    if(usernick1.value != skins2.innerText)
    {
      skins1.innerText = usernick1.value;
      username1.innerText = usernick1.value;
      usernick1.value = '';
      error.style.display = 'none';

    }
    else{
      error.innerText = `Імена не можуть співпадати!`;
      error.style.display = 'block';
    }

  
   }
   else{
     error.innerText = `Поле не може бути пустим`;
     error.style.display = 'block';
   }

}
userCheck2.onclick = function(){
  if(usernick2.value != "")
  {
    if(usernick2.value != skins1.innerText){
  skins2.innerText = usernick2.value;
  username2.innerText = usernick2.value;
  usernick2.value = '';
  error.style.display = 'none';
    }
    else{
      error.innerText = `Імена не можуть співпадати!`;
      error.style.display = 'block';
    }
   }
   else{
     error.innerText = `Поле не може бути пустим`;
     error.style.display = 'block';
   }
  
}
}
nickNames();
play.onclick = function(){
 
  if(player1.style.backgroundColor != player2.style.backgroundColor)
  {
    game.style.display = 'flex';
    lobby.style.display = 'none';
  }
  else if(player1.style.backgroundColor == player2.style.backgroundColor)
  {
    menu.classList.toggle("_open");
    error.style.display = 'block';
    error.innerText = 'Кольори не можуть співпадати';
  }
}
exit.onclick = function()
{
  game.style.display = 'none';
  lobby.style.display = 'flex';
}
settings.onclick = function()
{
  menu.classList.toggle("_open");
}
