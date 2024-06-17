import { emitirTextoEditor } from "./socket-front-documento.js";
import { selecionarDocumento } from "./socket-front-documento.js";

//codigo que interage somente com html

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    //emitirTextoEditor(textoEditor.value, nomeDocumento);
    emitirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento
    });
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}



export { atualizaTextoEditor};