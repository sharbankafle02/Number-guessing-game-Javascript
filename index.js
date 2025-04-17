let guess;
let attempt=0;
let answer=Math.floor((Math.random()*100)+1);
isRunning=true;
while(isRunning){
    guess=window.prompt("Guess the number between 1 to 100: ");
    attempt++;
    if(guess>100 && guess<0){
        window.alert("Please enter the valid number!!");
    }
    else if(guess>answer){
        window.alert("YOUR GUESS IS TOO HIGH!!!");
    }
    else if(guess<answer){
        window.alert("YOUR GUESS IS TOO LOW!!");
    }
    else{
        window.alert(`Your guess is correct the answer is ${answer} you took ${attempt} attempt to guess the correct answer`);
        isRunning=false;
    }
}
console.log("Thank for playing the game");