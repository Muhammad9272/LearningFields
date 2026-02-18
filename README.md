
# The Learning Field - Next.js Website

This project is a component-based Next.js (App Router) implementation of the provided HTML website, styled with Tailwind CSS and using Google Fonts and Font Awesome icons.

## Features
- Fully componentized: Header, Hero, Philosophy, HowWeCanHelp, Testimonial, Footer
- Custom Tailwind theme (colors, fonts)
- Google Fonts (Inter, Lora)
- Font Awesome icons (via npm)
- Responsive and modern layout

## Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Run the development server
```
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Project Structure
- `src/components/` — All main layout sections as React components
- `src/app/page.tsx` — Main page, imports all layout components
- `tailwind.config.js` — Custom theme colors and fonts
- `public/images/hero-img.jpg` — Placeholder image (replace with your own)

### 4. Customization
- Replace the placeholder image in `public/images/hero-img.jpg` with your own hero image.
- Update text, links, and icons as needed in the components.
- Adjust Tailwind config for further theming.

### 5. Build for production
```
npm run build
```

## Notes
- Font Awesome is loaded via npm and imported in `src/app/layout.tsx`.
- Google Fonts are loaded in `globals.css`.
- All sections are mobile responsive.

---

For any questions or further customization, refer to the Next.js and Tailwind CSS documentation.
