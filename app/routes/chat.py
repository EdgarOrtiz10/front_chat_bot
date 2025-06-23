from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from app.schemas.message import MessageInput
from app.services.chat_service import procesar_mensaje

templates = Jinja2Templates(directory="templates")
router = APIRouter()

@router.get("/chat", response_class=HTMLResponse)
def get_chat_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@router.post("/mensaje")
def recibir_mensaje(mensaje: MessageInput):
    return procesar_mensaje(mensaje)
