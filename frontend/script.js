async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value.trim();
    if (!userMessage) return;

    const endpoints = [
        'http://18.230.58.17:8000/questions',
        'http://localhost:8000/questions'
    ];

    // Mostrar mensaje del usuario
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    for (let url of endpoints) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pregunta: userMessage }),
            });

            if (!response.ok) throw new Error(`Error ${response.status}`);

            const data = await response.json();
            const botDiv = document.createElement('div');
            botDiv.className = 'message bot';
            botDiv.textContent = data.respuesta || 'Respuesta vacía del servidor.';
            chatBox.appendChild(botDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            return;
        } catch (err) {
            console.warn(`Fallo al conectar con ${url}:`, err.message);
        }
    }

    // Si todos los intentos fallan
    const errorDiv = document.createElement('div');
    errorDiv.className = 'message bot';
    errorDiv.textContent = 'No se pudo conectar a ningún servidor.';
    chatBox.appendChild(errorDiv);
}
