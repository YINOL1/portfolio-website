# Portfolio Backend

This backend powers the contact form on the portfolio website. It accepts form submissions from the frontend, validates the request, and sends the message to the site owner via Gmail SMTP.

## Backend architecture

The service is built as a lightweight serverless API using Python and FastAPI:

- `main.py` defines the FastAPI application and the contact endpoint.
- `template.yaml` configures the AWS Serverless Application Model (SAM) deployment.
- An AWS Lambda function runs the FastAPI app through `Mangum`, which adapts ASGI requests to Lambda events.
- An AWS HTTP API exposes the backend publicly and routes requests to the Lambda function.
- CORS is enabled so the portfolio frontend can send submissions from approved origins.
- The API accepts POST requests at `/api/contact` and returns a success or error response.

## Request flow

1. The frontend submits a contact form payload containing name, email, and message.
2. The FastAPI app validates the incoming request using a Pydantic model.
3. The backend checks for SMTP credentials and returns a 503 error if email delivery is not configured.
4. It creates an email message and sends it using Gmail SMTP over TLS.
5. If delivery succeeds, the API returns a success response; if not, it returns a 502 error.

## Tech stack

- Python 3.12
- FastAPI
- Mangum
- AWS Lambda
- AWS API Gateway HTTP API
- Gmail SMTP
- AWS SAM for deployment

This design keeps the backend simple, scalable, and inexpensive while enabling secure contact form submissions from the portfolio site.
