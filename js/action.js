document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
$('$sig1').click(function(){
	          navigator.notification.beep(1);
	          var nombre = document.getElementsByName('nombre')[0].value;//0('$nombre').value
              localStorage.setItem("nombre" , nombre);
              navigator.notification.alert("hola" + nombre,null,"bienvenido","ok");

              }};
