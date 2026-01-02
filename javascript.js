let userScore=0;
let comScore=0;
//const compScore1=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msgs");
const userScore1=document.querySelector("#user-score");
const userSelection=document.querySelectorAll(".choice1")
//const userScorePara=document.querySelector("#user-score");
//const compScorePara=document.querySelector("#comp-score");

userWin=null;

compScore1.innerText=comScore;
userScore1.innerText=userScore;
 
///select the user choice///////////////
   choices.forEach((choice)=>
    {
     //console.log(choice);
        choice.addEventListener("click", () => 
            {
            const userChoice=choice.getAttribute("id");
            // console.log("choices was clicked",userChoice);
            playGame(userChoice);
        });
});


const drawGame=()=>{
    console.log("garme draw");
    //msg.innertext="Draw play again";
}
const genCompChoice=() =>{
     const option=["rock","paper","sessor"];

     const randIdx=Math.floor(Math.random()*3);
     return option[randIdx];
}

const playGame=(userChoice) =>
{
    
    const compChoice=genCompChoice();
    console.log("this is going to copmuter",compChoice);
    console.log("this is going user choice",userChoice);
   
    
    
    
    if(userChoice===compChoice)
    {
            drawGame();
            userWin=null;
            msg.innerText="Draw Play Again";
    }
    if(userChoice === "rock")
    { 
     
        if(compChoice==="paper")
        {
            userWin=false;
            comScore=comScore+1;
            msg.innerText="computer win";
            compScore1.innerText=comScore;
            console.log("computer win==",comScore);
            
            
        }
        else if(compChoice==="sessor")
        {
            userWin=true;
            //userScore=userScore+1;
            userScore=userScore+1;
            msg.innerText="You Win";
            userScore1.innerText=userScore;
            //console.log("user win ==",userScore);
            
        }
    }
    else if(userChoice==="paper" && compChoice==="rock")
    {   
            userWin=true;
            userScore=userScore+1;
            //console.log("user win==",userScore);
            msg.innerText="You Win";
            userScore1.innerText=userScore;
            
    }
          
    else if(userChoice==="sessor" && compChoice==="paper")
    {
                userWin=true;
                userScore=userScore+1;
              //  console.log("user win ==",userScore);
              msg.innerText="You Win";  
              userScore1.innerText=userScore;
                
                
            
    }
        
    else if(compChoice==="rock" && userChoice==="sessor" )
    {
            userWin=false;
            comScore=comScore+1;
            //console.log("Computer win",comScore);
            msg.innerText="Compuiter win";
            compScore1.innerText=comScore;
            
            //msg.innerText="you loss";        
    }
    else if(compChoice==="paper" && userChoice==="sessor")
    {
            userWin=false;
            comScore=comScore+1;
            //console.log("computer win",comScore);
            msg.innerText="Computer Win";
            compScore1.innerText=comScore;
            
            
    }
    else if(compChoice==="sessor" && userChoice==="paper")
    {
        userWin=false;
        comScore=comScore+1;
        //console.log("computer win",comScore);
        msg.innerText="Computer win";
        compScore1.innerText=comScore;
        
        //msg.innertext="you loss";
            
     }
        
    
}

