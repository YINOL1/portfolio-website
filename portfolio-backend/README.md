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

## Deploy to AWS Lambda

The backend is packaged for AWS Lambda with Mangum and AWS SAM. Install the AWS CLI, AWS SAM CLI, and Docker, then configure AWS credentials for your account.

From the repository root, build and deploy the service:

```powershell
Set-Location portfolio-backend
sam build --use-container
sam deploy --guided
```

When prompted for `FrontendOrigin`, use `https://yinol1.github.io`. After deployment, copy the `ContactApiUrl` output. In the Lambda console, open the function created by the stack and add these environment variables under **Configuration > Environment variables**:

- `SMTP_USERNAME`: the Gmail sender account
- `SMTP_PASSWORD`: that account's Google App Password
- `SMTP_HOST`: optional; defaults to `smtp.gmail.com`

Keep the App Password private. Then add a GitHub Actions repository variable named `VITE_CONTACT_API_URL` with the `ContactApiUrl` value (without a trailing slash), and rerun the GitHub Pages deployment workflow. The frontend will then send contact form requests to the Lambda API.