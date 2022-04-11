let tipoVentPublic = document.getElementById('tipo');
let cantidadVentPublic = document.getElementById('cantidad');
let precioVentPublic = document.getElementById('precio');
let totalVentPublic = document.getElementById('total');
let hashVentPublic = document.getElementById('hash');
let clear = document.getElementById('clearLocal')
let formVenta = document.getElementById('formVenta')
let btnSubmit= document.getElementById('submit')
    
let venta = JSON.parse(localStorage.getItem("venta"));
 
 tipoVentPublic.value = venta.tipoV;
 precioVentPublic.value = venta.precioV;
 cantidadVentPublic.value = venta.cantidadV;
 totalVentPublic.value = venta.totalV;
 hashVentPublic.value = venta.hashV;  

 clear.addEventListener('click', ()=>{
     localStorage.removeItem('venta')
     toastr["error"]("Orden de venta eliminada", "P2Broker")
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
  
  