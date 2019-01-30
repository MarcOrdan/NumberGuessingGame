 //game values
 let min = 1,
     max = 10,
     winningNum = 2,
     guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI value
minNum.textContent = min;
maxNum.textContent = max;

//listen for submit
guessBtn.addEventListener('click',function(){
   let guess = parseInt(guessInput.value);

   //validate input
   if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   //check if won
   if(guess === winningNum){
       guessInput.disabled = true;
        //indicate they won
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct. You Win!`, 'green');
    } else {

   }
});

//setMessage function
function setMessage(msg,color) {
    message.style.color = color;
    message.textContent = msg;
}