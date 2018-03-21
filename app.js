let min=1;
let max=10;
let winningNum=getWinningNum(min,max);
let guessLeft=3;

const UIgame=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');



 minNum.textContent=min;
 maxNum.textContent=max; 
 
 //Event Listener for play again

 game.addEventListener('mousedown',function(e){
  
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

 });


 guessBtn.addEventListener('click',()=>{

    let guess=parseInt(guessInput.value);


    if(isNaN(guess) || guess<min || guess>max){
   
        setMessage(`Please enter the numbers between ${min} and ${max}`,'red');
    }

    if(guess === winningNum){

        gameover(true,`${winningNum} is correct!,You Win`);
    
    } 
    
    else {

     guessLeft-=1;

     if(guessLeft === 0)
    {

        gameover(false,`Game Over,Correct Number was ${winningNum}`);

    } else {
        
        guessInput.style.borderColor='red';

        guessInput.value='';

        setMessage(`${guess} is not correct,${guessLeft} guesse left`,'red');

    }
    }
 });

 function gameover(won,msg){

    let color;

    won === true ? color='green' : color='red';
 
    guessInput.disable=true;

    guessInput.style.borderColor=color;

    message.style.color=color;

    setMessage(msg);

    guessBtn.value='Play Again';

    guessBtn.className+='play-again';

 }

 function getWinningNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);

 }

 function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;

 }
      
                  