/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "ukraine": "linear-gradient(-60deg, rgba(180,25,25,0) 8%, rgba(255,239,0,1) 30%, rgba(0,18,255,0) 62%);",
      },
      boxShadow: {
        "btn-shadow": "0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.05)",
      },
      keyframes: {
        'shadowpulse': {
          '0%': {
            boxShadow: '0 0 0 0px rgba(255, 255, 255, 0.2)'
          },
          '100%': {
            boxShadow: '0 0 0 35px rgba(255, 255, 255, 0)'
          },
        }
      },
      animation: {
        "pulse-btn": 'shadowpulse 1s infinite',
      },
    },
  },
  plugins: [],
};
