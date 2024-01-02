import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkmineshaft: "#2A2A2A",
        mineshaft: "#262626",
        seagreen: "#2F9F48",
        tomthumb: "#355036",
        fuscousgray: "#585A4B",
        springleaves: "#509052",
        apple: "#2FC149",
        scorpion: "#595959",
        silverchalice: "#9E9E9E",
      },
    },
  },
  plugins: [],
};
export default config;
