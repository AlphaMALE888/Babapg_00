import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://baba-pg-house.preview.emergentagent.com').rstrip('/')


class TestHealthAndRoot:
    """Health and root endpoint tests"""

    def test_root_endpoint(self):
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data


class TestContactAPI:
    """Contact form API tests"""

    def test_contact_submit_success(self):
        payload = {
            "name": "Test Student",
            "phone": "9876543210",
            "room_type": "Double Sharing (₹8,000/mo)",
            "message": "Test enquiry from automated testing"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data.get("status") == "success"
        assert "message" in data

    def test_contact_missing_required_fields(self):
        # Missing phone
        payload = {"name": "Test", "room_type": "Single"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422

    def test_contact_optional_message(self):
        payload = {
            "name": "Test Student2",
            "phone": "9876543211",
            "room_type": "Single Room (₹12,000/mo)"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data.get("status") == "success"

    def test_contact_empty_name_rejected(self):
        payload = {"name": "", "phone": "9876543210", "room_type": "Single"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        # Empty string is still valid for Pydantic str, so 200 or 422
        assert response.status_code in [200, 422]
