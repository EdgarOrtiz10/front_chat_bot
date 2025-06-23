from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from app.routes import chat

app = FastAPI()

# Montar archivos estáticos (CSS/JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Incluir rutas
app.include_router(chat.router)

# Redirigir / hacia /chat
@app.get("/")
def root():
    return RedirectResponse(url="/chat")
