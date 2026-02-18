# Email Configuration Guide

## SMTP Setup (Mailtrap)

The contact form is now configured to use **Mailtrap SMTP** for email delivery.

### Environment Variables

The following environment variables are configured in `.env.local`:

```env
# Mailtrap SMTP Configuration
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=1371afde819024
MAIL_PASSWORD=7dd7f1fd29c071
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@thelearningfield.com
MAIL_FROM_NAME="The Learning Field"
MAIL_TO_ADDRESS=fk4854667@gmail.com
```

### How It Works

1. **Contact Form Submission**: Users fill out the contact form at `/contact`
2. **API Route**: Form data is sent to `/api/contact` endpoint
3. **Email Service**: The API uses `nodemailer` with Mailtrap SMTP to send emails
4. **Email Delivery**: Emails are sent to `fk4854667@gmail.com` (configurable via `MAIL_TO_ADDRESS`)

### Testing the Contact Form

#### Via Browser:
1. Navigate to `http://localhost:3000/contact`
2. Fill out the form with:
   - Name
   - Email
   - Subject (optional)
   - Message
3. Click "Send Message"
4. Check Mailtrap inbox for the email

#### Via API (cURL):
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message content"
  }'
```

### Email Template

Emails are sent with a professional HTML template featuring:
- Brand colors (#8FA98F - primary green)
- Responsive design
- Contact information (name, email, subject, message)
- Reply-to functionality (replies go to the submitter's email)

### Packages Used

- `nodemailer`: ^6.9.x - SMTP email sending
- `@types/nodemailer`: ^6.4.x - TypeScript type definitions

### Mailtrap Dashboard

Access your Mailtrap inbox to view test emails:
- **URL**: https://mailtrap.io/inboxes
- **Username**: 1371afde819024
- **Inbox**: Check the sandbox inbox for received emails

### Production Deployment

⚠️ **Important**: Mailtrap is for testing only. For production:

1. Update SMTP credentials to a production email service:
   - SendGrid
   - Amazon SES
   - Mailgun
   - Or your hosting provider's SMTP

2. Update `.env.local` (or production environment variables):
```env
MAIL_HOST=smtp.yourprovider.com
MAIL_PORT=587
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_FROM_ADDRESS=contact@yourdomain.com
MAIL_TO_ADDRESS=your_recipient@email.com
```

### Troubleshooting

**Email not sending?**
- Check dev server logs for error messages
- Verify `.env.local` file exists and has correct credentials
- Ensure nodemailer is installed: `npm install nodemailer`
- Restart dev server after changing environment variables

**Testing locally:**
```bash
# Stop current dev server
pkill -f "next dev"

# Start fresh dev server
npm run dev
```

### Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- Rotate credentials regularly
- Use environment variables for all sensitive data
- Validate and sanitize all user inputs (already implemented)
