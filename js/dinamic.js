export{tableDone,aSell, addressValue}


 
let addressValue = '0xF0a29e03773dD30D85C28B15745186e2047F3EA6';
let tableDone = document.getElementById('tableDone')



const aSell = [{ precio : 0.000050, cant : 1000000000, total : 50000, hash : "0x2f78679f0fce5210867110b3d82b93fadc2df1bac2baef2dec69dade20352ac8"}
              ] 
              
               aSell.sort((a, b) => a.precio - b.precio );//esta linea ordena la matriz de forma ascendente.
               

function Selli(){
    for (let i = 0; i < aSell.length; i++) {
    tableDone.innerHTML +=  
    `<tr> <td>${aSell[i].precio}</td> <td>${aSell[i].cant}</td> <td>${aSell[i].total}</td> <td>${aSell[i].hash}</td></tr>`
    }
};
  

Selli();
 


              


              

