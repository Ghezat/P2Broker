import{tableDone,aSell, addressValue} from "./dinamic.js"

let copyBtn = document.getElementById('copy-btn');
let address = document.getElementById('address');
let addressDirection = document.getElementById('Direcction')
let copySpan = document.querySelector('#copySpan');

let cantidadV = document.querySelector('#cantidadVenta');
let precioV = document.querySelector('#precioVenta');
let totalV = document.querySelector('#totalVenta');
let hashV = document.querySelector('#hashVenta');

let cantidadC = document.querySelector('#cantidadCompra');
let precioC = document.querySelector('#precioCompra');
let totalC = document.querySelector('#totalCompra');
let hashC = document.querySelector('#hashCompra');


let btnVender = document.getElementById('btn-vender')
let btnComprar = document.getElementById('btn-comprar')

let tableNew = document.getElementById('tableNew')



/* ---------evento al levantar la pagina-------- */

window.addEventListener('load', ()=> {
    
    if (localStorage.getItem('venta')) {
        let orderVenta =  JSON.parse(localStorage.getItem('venta'))
       /*  console.log(orderVenta) */
    
        tableNew.innerHTML +=
     `<tr> <td>${orderVenta.precioV}</td> <td>${orderVenta.cantidadV}</td><td>${orderVenta.totalV}</td><td>${orderVenta.hashV}</td><td><span class="bg-danger px-2"><a href="http://127.0.0.1:5500/ventaPublic.html" class="alinkPublic"><i class="bi bi-file-earmark-text"></i></a></span></td></tr>`
    
       
    }
    
    if (localStorage.getItem('compra')) {
        let orderCompra =  JSON.parse(localStorage.getItem('compra'))                                                                               
     /*    console.log(orderCompra) */
        tableNew.innerHTML +=
     `<tr><td>${orderCompra.precioC}</td><td>${orderCompra.cantidadC}</td><td>${orderCompra.totalC}</td><td>${orderCompra.hashC}</td><td><span class="bg-success px-2"><a href="http://127.0.0.1:5500/compraPublic.html" class="alinkPublic"><i class="bi bi-bag"></i></a></span></td></tr>`
    }                                                                                                                                                                 

});


/* ----------------------------------------------- */



/* ------acortar string address wallet------ */

let addressUno = addressValue.substring(0, 7);
let addressDos = addressValue.substring(35, addressValue.length);

address.innerText = addressUno + "..." + addressDos;
addressDirection.value = addressValue


/* ----------copiar wallet address--------- */

copyBtn.addEventListener('click' , copiar)

function copiar(){
    Direcction.style.display = "block"
    /* Direcction.select() */
    addressDirection.select()
    document.execCommand('copy');
    copySpan.style.display = "block"
    setInterval(hideMessage, 2000);
   
}

function hideMessage(){
    copySpan.style.display = "none"
    Direcction.style.display = "none"
}

/* --------------------------------- */


btnVender.addEventListener('click', vender)

btnComprar.addEventListener('click', comprar)

function vender(){
   let hasV = hashV.value
    if (hasV.length == 66 && totalV.value >=1000) {     
        tableNew.innerHTML +=
        `<tr><td>${precioV.value}</td><td>${cantidadV.value}</td><td>${totalV.value}</td><td>${hashV.value}</td><td><span class="bg-danger px-2"> <a href="http://127.0.0.1:5500/ventaPublic.html" class="alinkPublic"><i class="bi bi-file-earmark-text"></i></a></span></td></tr>`
        
        const valores = {
            cantidadV: cantidadV.value,
            precioV: precioV.value,
            totalV: totalV.value,
            hashV: hashV.value,
            tipoV: "venta"
        };
        
        const valor = JSON.stringify(valores);
        localStorage.setItem("venta", valor);
        let ven = JSON.parse(localStorage.getItem("venta"));
        console.log(ven)
            toastr["success"]("Orden creada, si el hash TxID suministrado es correcto en breve estará publicado", "P2Broker")
        } else if (hashV.value =="" && totalV.value !==""){ 
            toastr["warning"]("Debe colocar el hash TxID. Mas información vaya al apartado de ayuda", "P2Broker")
        } else { 
            toastr["warning"]("Problemas!!! Ve al apartado de ayuda", "P2Broker")
        }

};//fin de la function        



/* --------input de venta--------  */
cantidadV.addEventListener('change', ()=>{
if (cantidadV.value >= 1000000) {
        let c = (cantidadV.value * precioV.value)
        totalV.value = c.toFixed(2)
       
}else{ 
    cantidadV.value = 1000000;
    toastr["error"]("cantidad minima 1.000.000", "P2Broker")}

});

precioV.addEventListener('change', ()=>{
    let t =  (cantidadV.value * precioV.value)
    totalV.value = t.toFixed(2)
    
}); 

totalV.addEventListener('change', ()=>{
    if (totalV.value >= 500) {

        if (cantidadV.value ==="" && precioV !=="") {
            let p = (totalV.value / precioV.value)
            cantidadV.value = p.toFixed(2)
        } else {
            let y =  (totalV.value / cantidadV.value)
            precioV.value = y.toFixed(6)
        }
    } else {

        totalV.value = "";
        toastr["error"]("operación minima $500", "P2Broker")
    };

});

hashV.addEventListener('change', ()=>{
    let has = hashV.value
    if (has.length !== 66 ) {
        toastr["warning"]("Este Hash TxiD no es valido", "P2Broker")
        hashV.value ="";
    } 
})


 /* ----------------------------- */

/* --------input de compra--------  */
cantidadC.addEventListener('change', ()=>{

    if (cantidadC.value >= 1000000) {
        let c = (cantidadC.value * precioC.value)
        totalC.value = c.toFixed(2) 
    }else{
        cantidadC.value = 1000000;
        toastr["error"]("cantidad minima 1.000.000", "P2Broker")}
   
});

precioC.addEventListener('change', ()=>{
    let t =  (cantidadC.value * precioC.value)
    totalC.value = t.toFixed(2);
   
}); 

totalC.addEventListener('change', ()=>{
    if (cantidadC.value ==="" && precioC !=="") {
        let p = (totalC.value / precioC.value)
        cantidadC.value = p.toFixed(2)
    } else {
        let y =  (totalC.value / cantidadC.value)
        precioC.value = y.toFixed(6)
}
});

hashC.addEventListener('change', ()=>{
    let has = hashC.value
    if (has.length !== 66 ) {
        toastr["warning"]("Este Hash TxiD no es valido", "P2Broker")
        hashC.value ="";
    } 
})

/* ----------------------------- */

function comprar(){
    let hasC = hashC.value
    if (hasC.length == 66 && totalC.value >=1000) {  
     tableNew.innerHTML +=
     `<tr><td>${precioC.value}</td><td>${cantidadC.value}</td><td>${totalC.value}</td><td>${hashC.value}</td><td><span class="bg-success px-2"><a href="http://127.0.0.1:5500/compraPublic.html" class="alinkPublic"><i class="bi bi-bag"></i></a></span></td></tr>`
     
     const valores = {
         cantidadC: cantidadC.value,
         precioC: precioC.value,
         totalC: totalC.value,
         hashC: hashC.value,
         tipoC: "compra"
     };

     const valor = JSON.stringify(valores);
     localStorage.setItem("compra", valor);
     let comp = JSON.parse(localStorage.getItem("compra"));
     console.log(comp)
     toastr["success"]("Orden creada, si el hash TxID suministrado es correcto en breve estará publicado", "P2Broker")
     } else if (hashC.value =="" && totalC.value !==""){ 
         toastr["warning"]("Debe colocar el hash TxID. Mas información vaya al apartado de ayuda", "P2Broker")
     } else { 
        toastr["warning"]("Problemas!!! Ve al apartado de ayuda", "P2Broker")
     }

};//fin de la function        




toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

