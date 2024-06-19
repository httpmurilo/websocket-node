import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript"
    },
    {
        nome: "Node",
        texto: "texto de Node"
    },
    {
        nome: "Socket.io",
        texto: "texto de SocketIO"
    }

]


io.on("connection", (socket) => {
    console.log("Um cliente se conectou :ID :", socket.id);

    

        socket.on("selecionar_documento", (nomeDocumento, devolverTexto) =>{
            //cliente que ta conectado agora, coloca em uma sala, conceito do socket.io que vai agrupar clients


            socket.join(nomeDocumento);

            const documento = encontrarDocumento(nomeDocumento);

            if(documento) {
                devolverTexto(documento.texto);
            }
            
           

        } );
        
        //envia o evento pra todos menos pra quem ta conectado nesse socket
        //socket.broadcast.emit("texto_editor_clientes", texto);
       
        socket.on("texto_editor", ({texto, nomeDocumento}) => {
            //posta somente na sala
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);


        });
});

function encontrarDocumento(nome) {
    const documento  = documentos.find(() => {
        return documento.nome === nome;
    });
    return documento;
}