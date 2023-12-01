/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
      colors: {
        blue: "#4579CB",
        white: "#fff",
        darkGrey: "#474747",
      },
      borderRadius: {
        btn: "8px",
      },
      fontSize: {
        text: "16px",
        twentySix: "26px",
      },
      padding: {
        padx: "34px",
        pady: "13px",
      },
    },
  },
  plugins: [],
};
