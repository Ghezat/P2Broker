
const aHistorico = [{ precio : 0, cant : 0, total : 0, hash : "0x..."} ];



function showHistory(){
    for (let i = 0; i < aHistorico.length; i++) {
    tableHistory.innerHTML +=  
    `<tr> <td>${aHistorico[i].precio}</td> <td>${aHistorico[i].cant}</td> <td>${aHistorico[i].total}</td> <td>${aHistorico[i].hash}</td><td><i class="bi bi-check"></i></td> </tr>`
    }
};

showHistory(); 

console.log(aHistorico)

