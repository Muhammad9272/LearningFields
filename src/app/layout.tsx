import AOSInitializer from "@/components/AOSInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS CDN and custom config for App Router */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'primary-green': '#8FA98F',
                  'secondary-clay': '#B48A5A',
                  'bg-ivory': '#FAF9F6',
                  'charcoal': '#2F2F2F',
                  'light-wash': '#E9EDE6',
                },
                fontFamily: {
                  sans: ['Inter', 'sans-serif'],
                  serif: ['Lora', 'serif'],
                },
              },
            },
          }
        `}} />
        {/* Google Fonts: Inter and Lora */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        {/* Font Awesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        {/* AOS CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
      </head>
      <body className="bg-bg-ivory text-charcoal font-sans antialiased">
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}