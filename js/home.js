import{aSell, addressValue} from "./dinamic.js"

let sumaTotal = document.querySelector('#sumaTotal')
let cantOrdenes = document.querySelector('#cantOrdenes')
let addETH = document.getElementById('addETH')
let addBSC = document.getElementById('addBSC')


/* ----------ontencion de datos para el home------- */

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
