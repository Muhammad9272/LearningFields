if (typeof window !== 'undefined' && window.tailwind === undefined) {
  const script = document.createElement('script');
  script.src = 'https://cdn.tailwindcss.com';
  script.onload = () => {
    window.tailwind = true;
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
    };
  };
  document.head.appendChild(script);
}
