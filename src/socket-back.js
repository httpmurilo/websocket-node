import io from "./servidor.js";


io.on("connection", (socket) => {
    console.log("Um cliente se conectou :ID :", socket.id);

    

        socket.on("selecionar_documento", (nomeDocumento) =>{
            //cliente que ta conectado agora, coloca em uma sala, conceito do socket.io que vai agrupar clients

            socket.join(nomeDocumento);

        } );
        
        //envia o evento pra todos menos pra quem ta conectado nesse socket
        //socket.broadcast.emit("texto_editor_clientes", texto);
       
        socket.on("texto_editor", (texto, nomeDocumento) => {
            //posta somente na sala
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);


        });
});
