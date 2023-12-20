/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#188c8c",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};

