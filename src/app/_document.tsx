import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Tailwind CSS CDN and custom config */}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
