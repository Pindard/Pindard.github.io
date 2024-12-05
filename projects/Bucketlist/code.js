//Lagre en liste som skal inneholde bucketliste


let goals = ["Hoppe fallskjerm", "Kjøpe og mekke på Motorsykkel", "Kjøpe en 991.2 Porsche GT3RS"];
let bucketlist = document.getElementById("bucketlist");
for (i = 0; i < goals.length; ++i) {
    let li = document.createElement('li');
    li.innerText = goals[i];
    list.appendChild(li);
}


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