// background.js

// Escuchar el evento onInstalled para imprimir un mensaje en la consola cuando la extensión se instala o actualiza
chrome.runtime.onInstalled.addListener(() => {
    console.log('La extensión se ha instalado o actualizado');
  });
  
  // Escuchar el evento onMessageExternal para recibir mensajes de otras extensiones o aplicaciones
  chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    console.log('Mensaje recibido de otra extensión o aplicación:', request);
    // Enviar una respuesta al mensaje recibido
    sendResponse({ message: 'Mensaje recibido con éxito' });
  });