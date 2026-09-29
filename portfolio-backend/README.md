# Portfolio contact backend

The contact endpoint sends messages to me using Gmail SMTP.

## Configure Gmail

Use a Gmail account as the sender. Enable 2-Step Verification for that account, then create an App Password in its Google Account security settings. Use the App Password here, not the account's regular password. Keep it private and configure it as an environment variable on the machine or hosting service running this backend.

## Run locally on Windows

From the repository root, install the backend dependencies:

```powershell
py -m pip install -r portfolio-backend/requirements.txt
```

Set the SMTP credentials in the same PowerShell session, then start the API:

```powershell
$env:SMTP_USERNAME = "your-sender@gmail.com"
$env:SMTP_PASSWORD = "your-16-character-app-password"
py -m uvicorn main:app --reload --app-dir portfolio-backend
```

The SMTP host defaults to `smtp.gmail.com`; set `SMTP_HOST` only if using a different SMTP provider. Configure `SMTP_USERNAME` and `SMTP_PASSWORD` as secrets in production as well. The endpoint returns an error instead of claiming success when email is not configured or delivery fails.