# Portfolio Website

A full-stack personal portfolio website built with a React/Vite frontend and a FastAPI backend for the contact form. The project is split into two main directories:

- `my-portfolio/` — the public-facing portfolio website
- `portfolio-backend/` — the email API used by the portfolio contact form

This repository contains the source for a personal portfolio site that showcases experience and professional background while providing a lightweight contact workflow that sends messages via email.

## Overview

The portfolio site includes:

- A modern single-page React experience
- Light/dark theme support
- Route-based pages for the main profile and experience sections
- Reusable navigation and footer components
- A backend API endpoint for contact submissions
- SMTP-based email delivery using Gmail
- AWS SAM deployment configuration for the backend

## Project Structure

```text
portfolio-website/
├── LICENSE
├── CONTENT-LICENSE
├── README.md
├── package-lock.json
├── my-portfolio/
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       └── components/
│           ├── AboutMe.jsx
│           ├── ExperiencePage.jsx
│           ├── Footer.jsx
│           ├── NavBar.jsx
│           └── ...
├── portfolio-backend/
│   ├── README.md
│   ├── main.py
│   ├── requirements.txt
│   ├── template.yaml
│   ├── samconfig.toml
│   └── .gitignore
└── .github/
```

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- CSS for styling

### Backend

- Python 3.12
- FastAPI
- Mangum (AWS Lambda adapter)
- SMTP email delivery via Gmail
- AWS SAM for deployment

## Features

### Portfolio Frontend

- Responsive portfolio layout
- Dynamic theme switching
- Section-based content for personal introduction and experience
- Clean, modern styling
- Client-side routing for page navigation

### Contact Form Backend

- POST endpoint at `/api/contact`
- Validates contact form payload
- Sends email using SMTP TLS
- Supports CORS for local development and configured frontend origins
- Deploys as an AWS Lambda HTTP API through SAM

## Prerequisites

Before running the project locally, install:

- Node.js 18+ or newer
- npm
- Python 3.12+
- A Gmail account with app-password support for SMTP
- Optional: AWS CLI and SAM CLI for backend deployment

## Frontend Setup

From the repository root:

```bash
cd my-portfolio
npm install
npm run dev
```

This starts the Vite dev server, typically at:

```text
http://localhost:5173
```

To build the production bundle:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Backend Setup

From the repository root:

```bash
cd portfolio-backend
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# or .venv\Scripts\activate on Windows
pip install -r requirements.txt
```

Run the API locally:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:

```text
http://localhost:8000
```

## Environment Variables

The backend expects SMTP credentials to be set in the environment:

```bash
export SMTP_USERNAME="your-gmail-address@gmail.com"
export SMTP_PASSWORD="your-app-password"
export SMTP_HOST="smtp.gmail.com"
export FRONTEND_ORIGIN="http://localhost:5173"
```

Notes:

- `SMTP_PASSWORD` should generally be a Gmail App Password rather than your main account password.
- `FRONTEND_ORIGIN` is used for CORS configuration and local testing.
- If these values are missing, the contact endpoint will return a 503 error.

## Contact API

The portfolio frontend submits data to the backend contact endpoint:

```http
POST /api/contact
Content-Type: application/json
```

Example request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello! I'd like to connect about a project opportunity."
}
```

The backend sends an email to the configured recipient and responds with a success message when delivery succeeds.

## Deployment

### Backend Deployment (AWS SAM)

The backend is configured for AWS Lambda using `template.yaml` and `samconfig.toml`.

From `portfolio-backend/`:

```bash
sam build
sam deploy --guided
```

This deploys the contact API to AWS Lambda and exposes it through an API Gateway HTTP API.

### Frontend Deployment

The frontend is a standard Vite app and can be deployed to any static hosting platform such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Set the API endpoint in the frontend app to match the deployed backend URL when needed.

## Local Development Workflow

Typical development flow:

1. Start the frontend in `my-portfolio/`
2. Start the backend in `portfolio-backend/`
3. Submit the contact form from the site locally
4. Verify the email is delivered through the configured Gmail SMTP account

## Licensing

This project includes licensing files for content and code usage:

- `LICENSE`
- `CONTENT-LICENSE`

Please review those files before reusing or redistributing the project content.

## Contributing

This is a personal portfolio project. Contributions may be welcome depending on the project owner’s preferences, but the repository is primarily intended for personal website content and deployment.

## Author

Built and maintained by the repository owner for a personal portfolio website.

## Notes

This repo is a good example of a small full-stack web project combining:

- a static front-end portfolio experience,
- a lightweight Python API,
- SMTP-based communication,
- and serverless deployment on AWS.

If you are using this as a template, you may want to customize the content, contact email, styling, and deployment settings to match your own portfolio.
