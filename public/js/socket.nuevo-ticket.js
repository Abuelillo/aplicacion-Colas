//Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');
//escuchar sucesos --ON
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

//(1 -> id llamada,2 -> funcion a ejecutar)
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    //(1-> id llamada, 2-> callback que retorna, 3-> funcion que se ejecuta al terminar)
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});