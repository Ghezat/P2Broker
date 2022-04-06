export{tableDone,aSell, addressValue}

let addressValue = '0xE9464Fde8B6608DFa65d19d9226444A9F3B03268';
let tableDone = document.getElementById('tableDone')

const aSell = [{ precio : 0, cant : 0, total : 0, hash : "sin datos"}
              ] 
              
               aSell.sort((a, b) => a.precio - b.precio );//esta linea ordena la matriz de forma ascendente.
               

function Selli(){
    for (let i = 0; i < aSell.length; i++) {
    tableDone.innerHTML +=  
    `<tr> <td>${aSell[i].precio}</td> <td>${aSell[i].cant}</td> <td>${aSell[i].total}</td> <td>${aSell[i].hash}</td></tr>`
    }
};
  

Selli();
 


