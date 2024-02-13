/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 0 rgba(0,0,0,1), inset 0 -1px 4px rgba(0,0,0,.5)",
      },
      colors: {
        "text-title": "#232323"
      }
    }
  },
  plugins: []
};
