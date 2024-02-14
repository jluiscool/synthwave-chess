/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing-page-gradient":
          "linear-gradient(90deg, rgba(0,0,0,1) 27%, rgba(92,222,61,1) 35%, rgba(0,0,0,1) 100%)",
        "aboutValues": "lightgray 50% / cover no-repeat",
        "aboutGreen": "radial-gradient(circle at 50% 50%, rgba(59, 113, 61, 0.65) 0%, rgba(18, 18, 18, 0) 60%)",
        "aboutFuschia": "radial-gradient(circle at 50% 50%, rgba(255, 106, 246, 0.3) 0%, rgba(18, 18, 18, 0) 50%)",
      },
      colors: {
        synthPink: "#F6019D",
        synthTeal: "#2DE2E6",
        darkSquares: "#0D0221",
        lightSquares: "#791E94",
        selectYellow: "#F9C80E",
        timerWhite: "#FFF",
      },
      padding: {
        desktopMargin: "7%",
        tabletMargin: "32px",
        mobileMargin: "16px"
      },
      fontSize: {
        h1Mobile: "32px",
        h1Tablet: "40px",
        h1Desktop: "48px",
        h2Mobile: "24px",
        h2Tablet: "28px",
        h2Desktop: "32px",
        h3Mobile: "20px",
        h3Tablet: "22px",
        h3Desktop: "24px",
        h4Mobile: "16px",
        h4Tablet: "18px",
        h4Desktop: "20px",
        bodyMobile: "16px",
        bodyTablet: "16px",
        bodyDesktop: "16px",
        buttonMobile: "16px",
        buttonTablet: "16px",
        buttonDesktop: "16px",
      },
      boxShadow: {
      },
      backdropBlur: {
      },
      screens: {
        phone: "320px",
        phoneBig: "440px",
        tablet: "768px",
        desktop: "1280px",
      }
    },
  },
}

