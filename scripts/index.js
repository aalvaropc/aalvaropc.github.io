
function encriptar() {
    const entrada = document.getElementById("entrada");
    const salida = document.getElementById("salida");
    const textoOriginal = entrada.value.trim().toLowerCase();
    const regex = /^[a-zñáéíóú\s]+$/;
    
    if (textoOriginal === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    
    if (!regex.test(textoOriginal)) {
        alert("Por favor, ingresa un texto sin caracteres especiales o tildes.");
        return;
    }

    let textoEncriptado = "";
    for (let i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoOriginal[i];
                break;
        }
    }

    salida.value = textoEncriptado;
    entrada.value = "";
}

function copiar() {
    const salida = document.getElementById("salida");
    if (salida.value === "") {
        alert("No hay texto para copiar.");
        return;
    }

    salida.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function desencriptar() {
    const entrada = document.getElementById("entrada");
    const salida = document.getElementById("salida");
    let textoEncriptado = entrada.value.trim().toLowerCase();
    const regex = /^[a-zñáéíóú\s]+$/;
    
    if (textoEncriptado === "") {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }
    
    if (!regex.test(textoEncriptado)) {
        alert("Por favor, ingresa un texto sin caracteres especiales o tildes.");
        return;
    }
    
    claves = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];

    for (let i = 0; i < claves.length; i++) {
        textoEncriptado = textoEncriptado.split(claves[i][0]).join(claves[i][1]);
    }

    salida.value = textoEncriptado;
    entrada.value = "";
}