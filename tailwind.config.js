/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 0 rgba(0,0,0,1), inset 0 -1px 4px rgba(0,0,0,.5)",
        quiz: "0 0 10px rgba(0,0,0,.1)",
        container: "-0.0625rem 0.25rem 0 rgba(0,0,0,.18)"
      },
      colors: {
        "text-title": "#232323",
        "hover-gray": "#EFEFEF"
      }
    }
  },
  plugins: []
};
