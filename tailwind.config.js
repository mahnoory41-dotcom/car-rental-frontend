/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",      // Figma Main Blue Color
        primaryDark: "#2B52C3",  // Hover state Blue
        secondary: "#54A6FF",    // Light Blue accent
        bgLight: "#F6F7F9",      // Body background gray
        cardBg: "#FFFFFF",       // White background for cards
        textMain: "#1A202C",     // Dark text for headings
        textMuted: "#90A3BF",    // Gray text for subtitles/prices
      },
    },
  },
  plugins: [],
}