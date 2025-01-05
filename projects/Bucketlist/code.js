
document.getElementById("goalSubmitButton").addEventListener("click", updateBucketlist);

function updateBucketlist(event) {

//Hindrer standard skjema-ting
event.preventDefault();

// henter nye goals fra inputboksen
let newGoal = document.getElementById("goalInput").value;

// Passer på at det er "1" goals key i localStorage og at den er en array
if(localStorage.getItem("goals") == null){
    localStorage.setItem("goals", "[]");
}

// Henter gamle goals og skriver de inn i nye goals
let storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
storedGoals.push(newGoal);

// lagre gamle og nye goals i localStorage
localStorage.setItem("goals", JSON.stringify(storedGoals));

//printer ut verdien til storedGoals

document.getElementById("bucketlist").innerText = "";
    for (i = 0; i < storedGoals.length; ++i) {
        let li = document.createElement('li');
        li.innerText = storedGoals[i];
        document.getElementById("bucketlist").appendChild(li);
    }
}



















//definerer myGoals variabel og setter myGoals verdier i localStorage
//let myGoals = [
//    "Hoppe fallskjerm", 
//    "Kjøpe og mekke på Motorsykkel", 
//    "Kjøpe en 991.2 Porsche GT3RS", 
//    "Være med i en Ironman film"
//];

//myGoals.push(storedGoals); //Skriver opp lagrede goals fra localStorage inn i listen
//localStorage.setItem('goals', JSON.stringify(myGoals));

//pakker informasjon ut av local storage og definerer som storedGoals (for å sikre at info er lagret lokalt)
//let storedGoals = JSON.parse(localStorage.getItem('goals'));
//console.log("Her er lagrede goals: " + storedGoals)

//funksjon som printer ut verdien til storedGoals
//function updateBucketlist() {
//    document.getElementById("bucketlist").innerText = "";
//    for (i = 0; i < myGoals.length; ++i) {
//        let li = document.createElement('li');
//        li.innerText = myGoals[i];
//        document.getElementById("bucketlist").appendChild(li);
//    }
//}

//updateBucketlist();

//Skrivefelt og knapp som kan legge til nye Goals til bucketlisten
//document.getElementById("skjema").addEventListener("submit", submitGoal);

//function submitGoal(event) {
//    event.preventDefault(); // SPA single page application

//    let goalInputValue = document.getElementById("goalInput").value;
//    if (goalInputValue === "") {
//        alert("Empty input")
//    } else {
//    myGoals.push(goalInputValue);

//    updateBucketlist();
//    localStorage.setItem('goals', JSON.stringify(myGoals));
//}
//}
   
    //Husk at ting ikke ble lagret på local storage og local storage arrayen (myGoals) må kunne oppdateres dynamisk





//let bucketItem = "Bli pilot";
//storedGoals.push(bucketItem);
//updateBucketlist();


// document.getElementById("goalSubmit").addEventListener('click', () => {
//     console.log("test");
// });

// document.getElementById("goalSubmit").addEventListener('click', function() {
//     console.log("test");
// });

//let goalInput = document.getElementById("goalInput");
//let goalSubmit = document.getElementById("goalSubmit");

//goalSubmit.addEventListener("click", ()






//let goalInputValue = goalInput.value;
//console.log(goalInputValue);


// Lag et tekstfelt, og en knapp, fyll inn i ...











//let goals = ["Hoppe fallskjerm", "Kjøpe og mekke på Motorsykkel", "Kjøpe en 991.2 Porsche GT3RS", "Være med på en Ironman film"];
//let list = document.getElementById("bucketlist");
//for (i = 0; i < goals.length; ++i) {
//    let li = document.createElement('li');
//    li.innerText = goals[i];
//    list.appendChild(li);
//}

//Lagre informasjonen i localStorage

//let myGoals = ["Hoppe fallskjerm", "Kjøpe og mekke på Motorsykkel", "Kjøpe en 991.2 Porsche GT3RS", "Være med på en Ironman film"];
//localStorage.setItem('goals', JSON.stringify(myGoals));


//let storedGoals = JSON.parse(localStorage.getItem('goals'));








        //localStorage.setItem("goals", "Hoppe fallskjerm", "Kjøpe og mekke på Motorsykkel", "Kjøpe en 991.2 Porsche GT3RS", "Være med på en Ironman film");
        //document.getElementById("bucketlist").innerHTML = localStorage.getItem("goals")

//Kunne skrive inn nye ting



//Kunne slette goals



//Aktiv goal randomizer




//<body>
//<center>
//    <h1>GeeksforGeeks</h1>
//</center>
//<ul id="myList"></ul>

// <script>
//     let data = ["Ram", "Shyam", "Sita", "Gita"];
//     let list = document.getElementById("myList");
//     for (i = 0; i < data.length; ++i) {
//         let li = document.createElement('li');
//         li.innerText = data[i];
//         list.appendChild(li);
//     }
// </script>
// </body>
// sources: 
// https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// https://www.shecodes.io/athena/41313-how-to-apply-a-function-to-a-specific-button-in-javascript