import { atualizaTextoEditor } from "./documento.js";

const socket = io();
//const socket = io("http://localhost:3000");


function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);

    });
}


function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}


socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});


export {emitirTextoEditor, selecionarDocumento};