/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  media: true,
  theme: {
    extend: {
      colors: {
        primary: "#6855D9",
        secondary: "#56ABF9",
        wheat: "#EEEFFD",
        primaryLight: "#BDC7E8",
        primaryLight100: "#848EF3",
        dark: "#47608A",
        darkLight: "#BCC6E7",
        secondaryLight: "#A3DFFE",
        darkInput: "#ACBADB",
        darkTooltip: "#6B7491"
      },
      backgroundImage: {
        signup_bg_svg: "url('/signup_bg.svg')",
        signup_bg_png: "url('/signup_bg.png')",
      }
    },
  },
  plugins: [
  ]
}