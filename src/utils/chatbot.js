// chatbot.js

// Función para enviar una solicitud HTTP POST a la API de ChatGPT con el mensaje del usuario
export function getChatbotResponse(message) {
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