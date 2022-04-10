export{tableDone,aSell, addressValue}


 
let addressValue = '0xF0a29e03773dD30D85C28B15745186e2047F3EA6';
let tableDone = document.getElementById('tableDone')



const aSell = [{ precio : 0.000050, cant : 1000000000, total : 50000, hash : "0xd39625fd722e63eddc2f1bf19b5eff23779c3bd4d502fc5119ab9ee9dad84ab5"}
              ] 
              
               aSell.sort((a, b) => a.precio - b.precio );//esta linea ordena la matriz de forma ascendente.
               

function Selli(){
    for (let i = 0; i < aSell.length; i++) {
    tableDone.innerHTML +=  
    `<tr> <td>${aSell[i].precio}</td> <td>${aSell[i].cant}</td> <td>${aSell[i].total}</td> <td>${aSell[i].hash}</td></tr>`
    }
};
  

Selli();
 


              


              

