//Definer variablet og hent ID fra html(document)
let img_rock = document.getElementById("rock")
let img_paper = document.getElementById("paper")
let img_scissors = document.getElementById("scissors")

let rockClicks = 0;
let paperClicks = 0;
let scissorClicks = 0;

img_rock.addEventListener("click", chooseRock)

function chooseRock() {
    rockClicks = rockClicks + 1;
    console.log("You chose ROCK!");
    
    //Genererer et tilfeldig nummber mellom 0 og 2
    const randomNum = (Math.floor)(Math.random() * 3);
    //Skriver om du vant eller tapte
    if (randomNum = 0) {
        alert ("RPSbot: Rock, it's a TIE!")
    }
    if (randomNum = 1) {
        alert ("RPSbot: Scissors.. NOOOOO I LOSE! HOW IS THIS POSSIBLE?!?!")
    }
    if (randomNum = 2) {
        alert ("RPSbot: Paper! YOU LOSE I WIN! VICTORY!")
    }

    //Forteller folk at det er kjedelig å velge samme
    if (rockClicks >= 5) {
        alert ("STOP SPAMMING ROCK!")
    }

}

img_paper.addEventListener("click", choosePaper)

function choosePaper() {
    paperClicks = paperClicks + 1;
    console.log("You chose PAPER!")

        //Genererer et tilfeldig nummber mellom 0 og 2
        const randomNum = (Math.floor)(Math.random() * 3);
        //Skriver om du vant eller tapte
        if (randomNum = 0) {
            alert ("RPSbot: Paper, it's a TIE!")
        }
        if (randomNum = 1) {
            alert ("RPSbot: Rock.. NOOOOO I LOSE! HOW IS THIS POSSIBLE?!?!")
        }
        if (randomNum = 2) {
            alert ("RPSbot: Scissors! YOU LOSE I WIN! VICTORY!")
        }
    
        //Forteller folk at det er kjedelig å velge samme
        if (rockClicks >= 5) {
            alert ("STOP SPAMMING PAPER!")
        }

}

img_scissors.addEventListener("click", chooseScissors)

function chooseScissors() {
    scissorClicks = scissorClicks + 1;
    console.log("You chose SCISSORS!")

       //Genererer et tilfeldig nummber mellom 0 og 2
       const randomNum = (Math.floor)(Math.random() * 3);
       //Skriver om du vant eller tapte
       if (randomNum = 0) {
           alert ("RPSbot: Scissors, it's a TIE!")
       }
       if (randomNum = 1) {
           alert ("RPSbot: Paper.. NOOOOO I LOSE! HOW IS THIS POSSIBLE?!?!")
       }
       if (randomNum = 2) {
           alert ("RPSbot: Rock! YOU LOSE I WIN! VICTORY!")
       }
   
       //Forteller folk at det er kjedelig å velge samme
       if (rockClicks >= 5) {
           alert ("STOP SPAMMING SCISSORS!")
       }

    }