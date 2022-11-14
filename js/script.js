//Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).
//Creiamo la nostra lista array
let myList = ["Pane","Latte","Uova","Riso"];
let myButton = document.querySelector("button");
let expenseList = document.querySelector(".list");

// for(let i = 0; i < myList.length ; i++){
//     let item = ` <div>${myList[i]}</div>`;
//     expenseList.innerHTML += item ;

    

// }
let i = 0;
while( i < myList.length ){
    let item = ` <div>${myList[i]}</div>`;
    expenseList.innerHTML += item ;
    i++;

    

}
myButton.addEventListener("click",
function(){
    let more = document.querySelector("#more").value;
    myList.push(more);
    expenseList.innerHTML += `<div>${more}</div>`;
}
)

