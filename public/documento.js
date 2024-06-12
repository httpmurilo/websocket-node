import { emitirTextoEditor } from "./socket-front-documento.js";

//codigo que interage somente com html

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    console.log("Soltou tecla");
    emitirTextoEditor(textoEditor.value);
    
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor};