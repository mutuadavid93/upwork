/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 0 rgba(0,0,0,1), inset 0 -1px 4px rgba(0,0,0,.5)",
        quiz: "0 0 10px rgba(0,0,0,.1)",
        container: "-0.0625rem 0.25rem 0 rgba(0,0,0,.18)",
        slider: "0 0.125rem 0 var(--black),0 0.375rem 0 rgba(0,0,0,.12),inset 0 -0.0625rem 0.25rem var(--black)"
      },
      colors: {
        "text-title": "#232323",
        "hover-gray": "#EFEFEF",
        'deep-green': '#19834B',
      },
    }
  },
  plugins: []
};
