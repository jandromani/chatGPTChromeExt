// index.js

// Escuchar el evento submit del formulario y enviar el mensaje del usuario a la extensión
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('message-input').value;
    chrome.runtime.sendMessage({ message: message }, (response) => {
      console.log('Respuesta recibida de la extensión:', response);
      document.getElementById('response').textContent = response.message;
    });
  });
  