from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from app.routes import chat  # asegúrate de tener app/routes/chat.py

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(chat.router)

@app.get("/")
def root():
    return RedirectResponse(url="/chat")
