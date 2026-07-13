# 1. Imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# 2. Initialize the App
app = FastAPI()

# 3. Configure CORS (Crucial for React connection)
# Replace the 5173 port if your Vite server is running on a different one
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

# 4. Define the Data Model
# This MUST match the keys in your React formData state perfectly
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# 5. Define the Endpoint
@app.post("/api/contact")
async def submit_contact_form(form_data: ContactForm):
    
    # --- LOGIC GOES HERE ---
    # For now, we will just print it to the backend terminal to prove it works
    print(f"Received message from: {form_data.name}")
    print(f"Email: {form_data.email}")
    print(f"Message: {form_data.message}")
    
    # 6. Return a response to React
    return {"status": "success", "message": "Thank you! Your message has been received."}