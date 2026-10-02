# Portfolio Website

A full-stack personal portfolio website built with a React/Vite frontend and a FastAPI backend for the contact form. The project is split into two main directories:

- `my-portfolio/` — the public-facing portfolio website
- `portfolio-backend/` — the email API used by the portfolio contact form

Check out the website here -> www.iyjwu.com

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

## Licensing

This project includes licensing files for content and code usage:

- `LICENSE`
- `CONTENT-LICENSE`

Please review those files before reusing or redistributing the project content.
