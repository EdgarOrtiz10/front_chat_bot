from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from app.routes import chat

app = FastAPI()

# Montar archivos estáticos (css, js)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Incluir rutas de la app
app.include_router(chat.router)

# Redirigir raíz hacia el frontend
@app.get("/")
def root():
    return RedirectResponse(url="/chat")
