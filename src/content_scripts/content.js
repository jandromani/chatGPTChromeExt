// content.js

// Escuchar el evento onMessage para recibir mensajes del popup de la extensión
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Mensaje recibido del popup:', request);
  
    // Si el mensaje recibido tiene la propiedad "message", enviarla a la API de ChatGPT para obtener una respuesta
    if (request.message) {
      getChatbotResponse(request.message).then(response => {
        // Enviar la respuesta obtenida de la API de ChatGPT al popup de la extensión
        sendResponse({ message: response });
      });
    }
  
    // Permitir la comunicación asincrónica con el popup
    return true;
  });
  
  // Función para enviar una solicitud HTTP POST a la API de ChatGPT con el mensaje del usuario
  function getChatbotResponse(message) {
    return new Promise((resolve, reject) => {
      axios.post('https://api.chatgpt.com/', {
        message: message
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  }
  