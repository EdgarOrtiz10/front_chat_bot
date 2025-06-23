
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
    loadingBubble.textContent = respuesta;

  } catch (error) {
    loadingBubble.textContent = "❌ Error al contactar el backend.";
  }

  input.value = "";
}
