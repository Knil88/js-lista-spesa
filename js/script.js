//Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).
//Creiamo la nostra lista array
let expense = ["pane ","pasta ","olio ","riso "];

let expenseBtn = document.querySelector("button");
let expenseList = document.querySelector(".list");

// creiamo prima il ciclo for
// for(let i = 0;i<expense.length;i++ ){
//     let item = `<div>${expense[i]}</div>`;
//     expenseList.innerHTML += item;
// }
//Andiamo ora a creare il ciclo while
let i = 0;
while(i<expense.length){
        let item = `<div>${expense[i]}</div>`;
         expenseList.innerHTML += item;
         i++ ;}


//creiamo ora l'evento click che reagirà quando cliccheremo sul pulsante

expenseBtn.addEventListener("click",
function (){
    let more = document.querySelector("#more").value;
    expense.push(more);
    expenseList.innerHTML += `<div>${more}</div>`;
})

