import requests
from app.schemas.message import MessageInput

def consulta(pregunta: MessageInput):
    ip_public = "18.230.58.17"
    port = "8000"
    endpoint = "/questions"
    url = f"http://{ip_public}:{port}{endpoint}"
    payload = {
        "pregunta": pregunta.mensaje
    }
    try:
        response = requests.post(url, json=payload, timeout=10)
        response.raise_for_status()
        data = response.json()
        assert "respuesta" in data
        return {"status": "ok", "respuesta": data["respuesta"]}
    except Exception as e:
        return {"status": "error", "error": str(e)}

def procesar_mensaje(mensaje: MessageInput):
    return consulta(mensaje)
