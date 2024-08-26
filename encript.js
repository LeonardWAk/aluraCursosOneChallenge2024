const inputEL = document.getElementById("inputEL");
const codigoEL = document.getElementById("codigoEL");
const btnEL = document.getElementById("btnEL");
const btnEL2 = document.getElementById("btnEL2");
const copyButton = document.getElementById("btn__copy");


const letters = ['e', 'i', 'a', 'o', 'u'];
const keys = ['enter', 'imes', 'ai', 'ober', 'ufat'];


function encriptar(text) {
    let textoEncriptado = [];
    
    for (let i = 0; i < text.length; i++) {
        let letraEncontrada = false;
        for (let j = 0; j < letters.length; j++) {
            if (text[i] === letters[j]) {
                textoEncriptado.push(keys[j]);
                letraEncontrada = true;
                break;
            }
        }
        if (!letraEncontrada) {
            textoEncriptado.push(text[i]);
        }
    }

    return textoEncriptado.join('');
}

function desencriptar(text) {
    let textoDesencriptado = [];

    let i = 0;
    while (i < text.length) {
        let subcadenaEncontrada = false;
        for (let j = 0; j < keys.length; j++) {
            if (text.startsWith(keys[j], i)) {
                textoDesencriptado.push(letters[j]);
                i += keys[j].length;
                subcadenaEncontrada = true;
                break;
            }
        }
        if (!subcadenaEncontrada) {
            textoDesencriptado.push(text[i]);
            i++;
        }
    }

    return textoDesencriptado.join('');
}


copyButton.addEventListener('click', function() {
  let textCopy = codigoEL.innerText;
  navigator.clipboard.writeText(textCopy)
      .then(function() {
          console.log('Texto copiado al portapapeles.');
          copyMessage.style.display = 'block';
          setTimeout(function() {
              copyMessage.style.display = 'none';
          }, 2000);
      })
      .catch(function(err) {
          console.error('Error al copiar el texto: ', err);
      });
});


btnEL.addEventListener("click", (e) => {
  e.preventDefault();
  let textValue=inputEL.value;
  codigoEL.innerHTML = encriptar(textValue);
})

btnEL2.addEventListener("click", (e) => {
  e.preventDefault();
  let textValue=inputEL.value;
  codigoEL.innerHTML = desencriptar(textValue);
})