//definerer myGoals og myGoals verdier i localStorage
let myGoals = [
    "Hoppe fallskjerm", 
    "Kjøpe og mekke på Motorsykkel", 
    "Kjøpe en 991.2 Porsche GT3RS", 
    "Være med i en Ironman film"
];

localStorage.setItem('goals', JSON.stringify(myGoals));

//pakker informasjon ut av local storage og definerer som storedGoals (for å sikre at info er lagret lokalt)
let storedGoals = JSON.parse(localStorage.getItem('goals'));
console.log(storedGoals)

//funksjon som printer ut verdien til storedGoals
function updateBucketlist() {
    document.getElementById("bucketlist").innerText = "";
    for (i = 0; i < storedGoals.length; ++i) {
        let li = document.createElement('li');
        li.innerText = storedGoals[i];
        document.getElementById("bucketlist").appendChild(li);
    }
}

//Lage skrivefelt og knapp som kan legge til nye goals inn i localStorage og myGoals
let bucketItem = "Bli pilot";
storedGoals.push(bucketItem);


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
// sources: https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/