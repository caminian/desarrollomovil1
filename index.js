var express     = require('express');
var app         = express();
var server      = require('http').createServer(app);
var io          = require('socket.io')(server);

io.on('connection',function(client){
    console.log("Client connected...");
    
    client.on("join", function(){
        console.log("Ingresado nuevo cliente");
    });

    client.on("mensajeSocket",function(mensaje){
        console.log("Mensaje: "+mensaje);
        client.broadcast.emit("enviarMensaje",mensaje);
    });
});

server.listen(process.env.PORT || 3000);

