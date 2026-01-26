let randomNumber = parseInt(Math.random() * 100 + 1); 
console.log(randomNumber);
//parseInt = remove the decimal

const submit=document.querySelector('#Submit')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const Remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')


const p=document.createElement('p')
let prevGuess=[]
let numGuesses=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }else if(guess<1){
        alert('Please enter a valid number more than 1')
    }else if(guess>100){
        alert('Please enter a valid number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER. RANDOM NUMBER WAS ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(`You Guess it right`)
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is Too Low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is Too High `)
    }

}

function displayGuess(guess){
    //
    userInput.value='';
    guessSlot.innerHTML +=`${guess}, `;
    numGuesses++
    Remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
    //
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    //
    userInput.value=' '
    userInput.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
    //
    const newgameButton=document.querySelector('#newGame')
    newgameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuesses=1
        guessSlot.innerHTML=''
        Remaining.innerHTML=`${11-numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true

    });

}