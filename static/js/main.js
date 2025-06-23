
function detectURLs(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return `<a href="${url}" target="_blank" style="color:#128c7e; text-decoration: underline;">${url}</a>`;
  });
}

async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById('chatBox');

  const userBubble = document.createElement('div');
  userBubble.className = "bubble-user";
  userBubble.textContent = message;
  chatBox.appendChild(userBubble);

  const loadingBubble = document.createElement('div');
  loadingBubble.className = "bubble-bot";
  loadingBubble.textContent = "Consultando...";
  chatBox.appendChild(loadingBubble);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("/mensaje", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensaje: message })
    });

    const data = await response.json();
    const respuesta = data.respuesta || "Sin respuesta del servidor.";

    loadingBubble.innerHTML = detectURLs(respuesta);
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (error) {
    loadingBubble.textContent = "❌ Error al contactar el backend.";
  }

  input.value = "";
}

// Enviar con Enter
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
});
