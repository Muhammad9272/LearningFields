import AOSInitializer from "@/components/AOSInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>The Learning Field | Neurodiversity Support</title>
        <meta name="description" content="The Learning Field provides expert support, resources, and guidance for neurodivergent children, parents, and schools. Book your meeting and discover inclusive education solutions." />
        <meta property="og:title" content="The Learning Field | Neurodiversity Support" />
        <meta property="og:description" content="Expert support, resources, and guidance for neurodivergent children, parents, and schools. Book your meeting and discover inclusive education solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Learning Field" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Learning Field | Neurodiversity Support" />
        <meta name="twitter:description" content="Expert support, resources, and guidance for neurodivergent children, parents, and schools." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/web-app-manifest-512x512.png" />
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