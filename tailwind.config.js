/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#188c8c",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mobile: { max: "768px" },
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};

