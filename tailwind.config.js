/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Black-Panther": "#000000",
        "Persian-Cat": "#8B8B8B",
        "Grey-Wolf": "#C7C7C7",
        "Polar-Bear": "##F0F0F0",
        "White-Rabbit": "#FFFFFF",
        Bubblegum: "#4C71F1",
        Blueberry: "#AFD4FF",
        "Cotton-Candy": "#DEEDFF",
        Avocado: "#00AF70",
        Mint: "#D1FFEF",
        Strawberry: "#F34336",
        Sherbet: "#ED6238",
        Pumpkin: "#FF9D2B",
        Caramel: "#FFEEDB",
        Vannila: "#FFF6EC",
        Cheesecake: "#FFEDED",
        Sweets: "#FFD8CC",
      },
      fontFamily: {
        Anuphan: ["Anuphan", "sans-serif"],
      },
      fontSize: {
        "Display-1": "30px",
        "Display-2": "24px",
        "Display-3": "20px",
        P: "16px",
        SM: "15.6px",
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      screens: {
        sm: "375px",
        md: "960px",
        lg: "1440px",
      },
      boxShadow: {
        "Box-Shadow": " 0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
