/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-image':"url('./src/assets/pexels-muffin-creatives-4235361.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

