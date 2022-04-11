import{aSell, addressValue} from "./dinamic.js"

let sumaTotal = document.querySelector('#sumaTotal')
let cantOrdenes = document.querySelector('#cantOrdenes')
let addETH = document.getElementById('addETH')
let addBSC = document.getElementById('addBSC')



/* ----------obtencion de datos para el home------- */

const aTotal = [];
let aTotalSuma = 0


aSell.forEach( function(elem) {
    aTotal.push(elem.cant)
    
});

console.log(aTotal);
aTotal.forEach( function(el){
    aTotalSuma += el
} )

sumaTotal.innerHTML = aTotalSuma
cantOrdenes.innerHTML = aSell.length

addETH.innerHTML = addressValue;
addBSC.innerHTML = addressValue;
/* ----------------------------------------------------- */


    setTimeout(mensageInitial, 3000) 
    
    function mensageInitial(){
        toastr["warning"]("para ver la pagina actualizada deberá de borrar historial y cookies diariamente antes de acceder!", "P2Broker")
    }
