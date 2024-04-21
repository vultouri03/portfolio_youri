/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cdn.discordapp.com/attachments/916820208214212661/1230867295400759326/IMG_1299.png?ex=6634e17f&is=66226c7f&hm=5d4884f885e510cba0dfc0ef4760142a6ef7f51fefdb91c90db22f7d613a2e3e&')"
      }
    },
  },
  plugins: [],
}

