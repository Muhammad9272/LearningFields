# Calendly Integration Setup

## Update Your Calendly Link

The "Book a Meeting" button in the navigation bar is now configured to link to Calendly. You need to replace the placeholder URL with your actual Calendly scheduling link.

### Files to Update:

#### 1. Desktop Navigation - `/src/components/Header.tsx`

Find this line (around line 152):
```tsx
href="https://calendly.com/your-calendly-link"
```

Replace with your actual Calendly link, for example:
```tsx
href="https://calendly.com/yourname/30min"
```

#### 2. Mobile Navigation - `/src/components/MobileNavbar.tsx`

Find this line (around line 82):
```tsx
href="https://calendly.com/your-calendly-link"
```

Replace with the same Calendly link:
```tsx
href="https://calendly.com/yourname/30min"
```

### How to Get Your Calendly Link:

1. Log in to your Calendly account at https://calendly.com
2. Go to your Event Types
3. Click on the event you want to share (e.g., "30 Minute Meeting")
4. Copy the scheduling link from the event details
5. Replace `https://calendly.com/your-calendly-link` in both files

### Example Calendly URLs:

- Standard: `https://calendly.com/username/30min`
- Team event: `https://calendly.com/team/discovery-call`
- Custom: `https://calendly.com/company-name/consultation`

### Testing:

After updating the link:
1. Restart your dev server: `npm run dev`
2. Click the "Book a Meeting" button in the navbar
3. It should open your Calendly page in a new tab

### Notes:

- The link opens in a new tab (doesn't navigate away from your site)
- Works on both desktop and mobile navigation
- Uses secure attributes (`target="_blank"` with `rel="noopener noreferrer"`)
