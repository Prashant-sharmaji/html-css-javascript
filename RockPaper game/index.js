let userScore = 0;
let copmScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const gencomputerchoice = ()=>{
   let option = ["rock", "paper", "scissor"];
let randidx = Math.floor(Math.random()*3);
return option[randidx]

}
const drawGame = () =>{
    console.log("game was draw")
     msg.innerHTML ="Game Draw"
     msg.style.backgroundColor = "black"
}

const showWinner = (userWin , userChoice, compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;

        console.log("you win")
        msg.innerHTML = `You win! Your ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
    }else{
        copmScore++;
        compScorePara.innerHTML = copmScore;
        console.log("you lose")
         msg.innerHTML = `You Lost! ${compchoice} beats Your ${userChoice}`
         msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice)
    const compchoice = gencomputerchoice();
    console.log("comp choice = ",compchoice)

    if(userChoice === compchoice){
        //draw
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        }else if(userChoice=== "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }else{
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin ,userChoice,compchoice)
    }
    


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
         
        playGame(userChoice)
    });
});
