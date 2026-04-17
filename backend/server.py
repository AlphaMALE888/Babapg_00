from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel
from typing import Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

resend.api_key = os.environ.get('RESEND_API_KEY', '')

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class ContactForm(BaseModel):
    name: str
    phone: str
    room_type: str
    message: Optional[str] = ""


@api_router.get("/")
async def root():
    return {"message": "Baba PG House API"}


@api_router.post("/contact")
async def submit_contact(data: ContactForm):
    doc = {
        "id": str(uuid.uuid4()),
        "name": data.name,
        "phone": data.phone,
        "room_type": data.room_type,
        "message": data.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }
    await db.enquiries.insert_one(doc)

    sender_email = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
    recipient = os.environ.get('NOTIFICATION_EMAIL', 'babapg001@gmail.com')

    html_content = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <div style="background:#2563EB;color:white;padding:24px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:22px;">New Room Enquiry</h1>
        <p style="margin:6px 0 0;opacity:0.9;font-size:14px;">Baba PG House — Greater Noida</p>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr style="border-bottom:1px solid #e5e5e5;">
            <td style="padding:12px 0;font-weight:bold;color:#555;width:35%;">Name</td>
            <td style="padding:12px 0;color:#111;">{data.name}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e5e5;">
            <td style="padding:12px 0;font-weight:bold;color:#555;">Phone</td>
            <td style="padding:12px 0;color:#111;">{data.phone}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e5e5;">
            <td style="padding:12px 0;font-weight:bold;color:#555;">Room Type</td>
            <td style="padding:12px 0;color:#111;">{data.room_type}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td>
            <td style="padding:12px 0;color:#111;">{data.message or 'No message provided'}</td>
          </tr>
        </table>
        <div style="margin-top:20px;padding:15px;background:#EFF6FF;border-radius:8px;border-left:4px solid #2563EB;">
          <p style="margin:0;color:#1D4ED8;font-size:14px;">
            <strong>Action Required:</strong> Call back {data.name} at <strong>{data.phone}</strong> to schedule a visit.
          </p>
        </div>
      </div>
      <p style="text-align:center;color:#999;font-size:12px;margin-top:16px;">
        Baba PG House · Near Galgotias & NIU University, Greater Noida
      </p>
    </div>
    """

    params = {
        "from": f"Baba PG House <{sender_email}>",
        "to": [recipient],
        "subject": f"New Enquiry: {data.room_type} — {data.name} ({data.phone})",
        "html": html_content
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent: {email}")
    except Exception as e:
        logger.error(f"Email send failed: {str(e)}")

    return {"status": "success", "message": "Your enquiry has been submitted successfully!"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
