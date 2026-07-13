import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("contact_form")

app = FastAPI()

# Temporary Local Host
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows POST, GET, etc.
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# 5. Define the Endpoint
@app.post("/api/contact")
async def submit_contact_form(form_data: ContactForm):
    logger.info("Received message from: %s", form_data.name)
    logger.info("Email: %s", form_data.email)
    logger.info("Message: %s", form_data.message)

    return {"status": "success", "message": "Thank you! Your message has been received."}