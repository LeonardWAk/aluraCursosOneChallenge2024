const inputEL = document.getElementById("inputEL");
const codigoEL = document.getElementById("codigoEL");
const btnEL = document.getElementById("btnEL");
const btnEL2 = document.getElementById("btnEL2");
const copyButton = document.getElementById("btn__copy");
const errorMessage = document.getElementById("errorMessage");

const letters = ['e', 'i', 'a', 'o', 'u'];
const keys = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Función para validar si el texto está en minúsculas y sin tildes
function isValidText(text) {
  // Expresión regular para letras minúsculas sin acentos
  const regex = /^[a-z\s]+$/;

  return regex.test(text);
}

function encriptar(text) {
    let textoEncriptado = [];

    if (isValidText(text)) {

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
     
  } else {
      // Mostrar el mensaje de error
      errorMessage.style.display = 'block';

      // Ocultar el mensaje de error después de 2 segundos
      setTimeout(function() {
          errorMessage.style.display = 'none';
      }, 2000);
  }
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
          message.style.display = 'block';
          setTimeout(function() {
              message.style.display = 'none';
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