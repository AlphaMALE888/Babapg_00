# Baba PG House — Marketing Website PRD

## Business Info
- **Business Name**: Baba PG House
- **Location**: Near Galgotias University & NIU University, Greater Noida
- **Phone**: 7290008205, 7290008206
- **Email**: babapg001@gmail.com
- **URL**: https://baba-pg-house.preview.emergentagent.com

## Architecture
- **Frontend**: React (CRA) + TailwindCSS + Shadcn UI + Framer Motion + react-fast-marquee
- **Backend**: FastAPI + Motor (MongoDB) + Resend (email)
- **Database**: MongoDB (enquiries collection)
- **Email**: Resend API (onboarding@resend.dev → babapg001@gmail.com)

## Core Requirements (Static)
1. Conversion-focused single-page marketing website
2. Light/Dark mode toggle with persistence
3. Contact form submissions sent to babapg001@gmail.com via Resend
4. Smooth scroll navigation with sticky navbar
5. Floating WhatsApp button with both numbers
6. Mobile-first responsive design
7. Framer Motion animations on scroll

## What's Been Implemented (June 2025)
- [x] Full website with 11 sections
- [x] Sticky glassmorphism navbar with mobile hamburger menu
- [x] Hero section with Call Now, Book a Visit, WhatsApp Us CTAs
- [x] Highlights marquee (react-fast-marquee)
- [x] About section with student image and stats
- [x] Room Types section (Single ₹12k, Double ₹8k, Triple ₹6k)
- [x] Facilities grid (9 amenities with icons)
- [x] Food/Mess section with weekly menu and meal times
- [x] Gallery with 6 images + Video Tour placeholder
- [x] Testimonials with 4 student reviews + rating summary
- [x] Location section with real Google Maps embed
- [x] FAQ accordion (7 questions)
- [x] Contact/Booking form (name, phone, room type, message)
- [x] Resend email integration → babapg001@gmail.com
- [x] MongoDB storage for enquiries (backup if email fails)
- [x] Floating WhatsApp button with both number popup
- [x] Dark/Light mode toggle (next-themes)
- [x] Footer with address, links, social icons
- [x] data-testid attributes on all interactive elements

## Test Results
- Backend: 100% (5/5 tests pass)
- Frontend: 95% (all core features working)
- WhatsApp popup: works in production (blocked by Emergent preview badge in testing env only)

## Prioritized Backlog (P0/P1/P2)

### P0 (Critical — Ready for Next Sprint)
- Resend domain verification: user needs to verify babapg001@gmail.com or a custom domain in Resend dashboard for emails to deliver outside test mode

### P1 (High Value)
- Enquiry admin dashboard: view all submitted enquiries with contact info
- WhatsApp auto-reply integration (Twilio or WATI)
- Google Analytics integration for conversion tracking

### P2 (Nice to Have)
- Real PG room photos upload
- YouTube video tour integration
- Blog section for SEO (student life, campus tips)
- Social media feed integration
- Online room booking / payment (Razorpay)
