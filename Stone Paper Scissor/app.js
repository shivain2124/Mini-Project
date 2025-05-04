let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const genComputerChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"]; 
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame= () => {
    console.log("game was drawn");
    msg.innerText="DRAW! Play again";
    msg.style.backgroundColor="grey";
}

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice); 

    const computerChoice = genComputerChoice();
    console.log("computer choice = " , computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }
    else if((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        userScore++;
        console.log("user score = " , userScore);
        console.log("you won (by luck)");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        userScorePara.innerText = userScore;

    }
    else{
        compScore++;
        console.log("comp score = " , compScore);
        console.log("you lost loser bwahahah");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
        compScorePara.innerText = compScore;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");


        playGame(userChoice);
    });
    
});


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
