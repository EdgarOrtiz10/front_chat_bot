
# 🤖 Chatbot Asistente - Proyecto RAG

Este proyecto es una interfaz de chatbot construida con **FastAPI** que permite a los usuarios interactuar de manera sencilla y amigable con un sistema backend que puede integrarse fácilmente a una arquitectura de recuperación aumentada por generación (RAG).

Diseñado con una estructura de **arquitectura limpia**, el proyecto separa claramente la lógica, las rutas, los esquemas y los servicios, y está preparado para ser desplegado en **Render**, **EC2**, o cualquier plataforma compatible con Python 3.11+.

---

## ¿Qué hace esta aplicación?

- Muestra una interfaz tipo chatbot (frontend responsivo).
- Captura los mensajes del usuario y los envía al backend.
- Puedes conectar el backend a cualquier sistema de respuestas (OpenAI, RAG, etc).
- Muestra las respuestas como si fuese una conversación en tiempo real.

---


## ¿Cómo ejecutar localmente?

1. Crea un entorno virtual:

```bash
python -m venv venv
source venv/bin/activate  # En Linux/Mac
venv\Scripts\activate   # En Windows
```

2. Instala dependencias:

```bash
pip install -r requirements.txt
```

3. Ejecuta el servidor:

```bash
uvicorn main:app --reload
```

4. Abre tu navegador en `http://localhost:8000/chat`

---

## ¿Cómo desplegar en Render?

1. Sube el proyecto a GitHub
2. En Render, crea un nuevo **Web Service**
3. Llena lo siguiente:
   - Build command: `pip install -r requirements.txt`
   - Start command: `bash start.sh`
4. Render detectará automáticamente `render.yaml` y configurará tu app.

---

## Contacto

Si deseas extender este proyecto, conectarlo con GPT u otra IA, o incluir un sistema de respuestas más robusto, ¡no dudes en escribirle a Edgar!
