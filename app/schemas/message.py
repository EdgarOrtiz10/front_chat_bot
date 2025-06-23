from pydantic import BaseModel

class MessageInput(BaseModel):
    mensaje: str
