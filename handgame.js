
const choices1=document.querySelectorAll(".choice");
const paraResult=document.querySelector("#paraResult")
choices1.forEach((choice)=>
{
     //console.log(choice);
        choice.addEventListener("click", () => 
            {
                const userChoice=choice.getAttribute("id");
                    console.log("choices was clicked",userChoice);
                playGame(userChoice);
            });
});

const playGame=(userChoice)=>
{
    const compChoices=genCompChoice();
    console.log(userChoice);
    console.log(compChoices);

    //call the function for decission for final selection
    let final=resultUser(userChoice,compChoices);
    console.log(final);
    paraResult.innerText=final;
}
const resultUser=(user1,comp)=>
{
    let finaldecision="";
    if(user1===comp)
    {
        finaldecision="Computer Win";
    }
    else if(user1!==comp)
    {
        finaldecision="User Win"
    }
    return finaldecision;
}
const genCompChoice=()=>
{
    const option=["Left","Right"];
    const indx=Math.floor(Math.random()*2);
    console.log(indx);
    return option[indx];
}