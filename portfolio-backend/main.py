import logging
import os
import smtplib
from email.message import EmailMessage

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("contact_form")

app = FastAPI()
CONTACT_RECIPIENT = "ianwu70109@gmail.com"

# Temporary Local Host
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]
frontend_origin = os.getenv("FRONTEND_ORIGIN")
if frontend_origin:
    origins.append(frontend_origin.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/contact")
def submit_contact_form(form_data: ContactForm):
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    if not smtp_username or not smtp_password:
        raise HTTPException(
            status_code=503,
            detail="Email delivery is not configured on the server.",
        )

    message = EmailMessage()
    message["Subject"] = "New portfolio contact form message"
    message["From"] = smtp_username
    message["To"] = CONTACT_RECIPIENT
    message["Reply-To"] = form_data.email
    message.set_content(
        f"Name: {form_data.name}\n"
        f"Email: {form_data.email}\n\n"
        f"{form_data.message}"
    )

    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    try:
        with smtplib.SMTP(smtp_host, 587, timeout=15) as smtp:
            smtp.starttls()
            smtp.login(smtp_username, smtp_password)
            smtp.send_message(message)
    except (OSError, smtplib.SMTPException):
        logger.exception("Contact form email delivery failed")
        raise HTTPException(
            status_code=502,
            detail="Unable to deliver your message right now. Please try again later.",
        ) from None

    logger.info("Contact form email delivered")
    return {"status": "success", "message": "Thank you! Your message has been sent."}