let tipoComPublic = document.getElementById('tipoComPublic');
let cantidadComPublic = document.getElementById('cantidadComPublic');                                             
let precioComPublic = document.getElementById('precioComPublic');                                              
let totalComPublic = document.getElementById('totalComPublic');                                             
let hashComPublic = document.getElementById('hashComPublic');
let clear = document.getElementById('clearLocal')
let formVenta = document.getElementById('formVenta')
let btnSubmit= document.getElementById('submit')

let Compra = JSON.parse(localStorage.getItem("compra"));

tipoComPublic.value = Compra.tipoC;
cantidadComPublic.value = Compra.precioC;
precioComPublic.value = Compra.cantidadC;
totalComPublic.value = Compra.totalC;
hashComPublic.value = Compra.hashC;   

clear.addEventListener('click', ()=>{
    localStorage.removeItem('compra')
    toastr["error"]("Orden de compra eliminada", "P2Broker")
    formVenta.reset();
    btnSubmit.disabled = true;
     
});


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
  
  