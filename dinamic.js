export{tableDone,aSell, addressValue}

let addressValue = '0xE9464Fde8B6608DFa65d19d9226444A9F3B03268';
let tableDone = document.getElementById('tableDone')

const aSell = [{ precio : 0.00056, cant : 2500000, total : 1400, hash : "0x943955836f9ed89c463b762f63b448b024503e42cfd06ac5bfa76d5ba6671c02"},
               { precio : 0.0009, cant : 1000000, total : 900, hash : "0xe5a7268a289d0f030e269922d69f208c768bc7195dc1678d5245a9cc3bfb15f9"},
               { precio : 0.0001, cant : 1000000000, total : 100000, hash : "0x103e0a2e2725f65e89ea5f8bdabc1822c0141886d4fe9783f8b7d6134089bce4"},
               { precio : 0.00005, cant : 20000000000, total : 1000000.00, hash : "0x7963f62b0dd6b572d180fbe7d68c47078b8ff1b713e50564f139e61d1fcca441"},
               { precio : 0.0001,  cant : 100000000,  total : 10000.00,	hash: "0x4569k62b0dd6b572d180fbe7d68c47078b8ff1b713e50564f139e61d1fccaop9"},
               { precio : 0.002, cant: 1700000, total: 3400.00, hash: "0x943955836f9ed89c463b762f63b448b024503e42cfd06ac5bfa76d5ba6671c02"}] 
              
               aSell.sort((a, b) => a.precio - b.precio );//esta linea ordena la matriz de forma ascendente.
               

function Selli(){
    for (let i = 0; i < aSell.length; i++) {
    tableDone.innerHTML +=  
    `<tr> <td>${aSell[i].precio}</td> <td>${aSell[i].cant}</td> <td>${aSell[i].total}</td> <td>${aSell[i].hash}</td></tr>`
    }
};
  

Selli();
 


