// import type { Config } from "tailwindcss";
//
// console.log("Tailwind config loaded");
//
// const config: Config = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: ["class", "[class~='dark']"],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: "#60a5fa",
//           DEFAULT: "#2563eb",
//           dark: "#1e40af",
//         },
//       },
//       fontFamily: {
//         sans: [
//           "SF Pro Display",
//           "-apple-system",
//           "BlinkMacSystemFont",
//           "Segoe UI",
//           "Roboto",
//           "Helvetica Neue",
//           "Arial",
//           "sans-serif",
//         ],
//       },
//     },
//     backdropBlur: {
//       xs: "2px",
//     },
//   },
//   plugins: [],
// };
//
// export default config;
console.log("Tailwind config loaded");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
