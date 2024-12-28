import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#CADCFC",
        foreground: "#00246B",
        primary: {
          light: "#CADCFC",
          DEFAULT: "#8AB6F9",
          dark: "#00246B",
        },
        secondary: {
          light: "#CADCFC",
          DEFAULT: "#00246B",
          dark: "#001A4D",
        },
        accent: {
          light: "#FFD1C4",
          DEFAULT: "#FF7A59",
          dark: "#CC5E46",
        },
        danger: "#F44336",
        success: "#4CAF50",
        warning: "#FFEB3B",
        info: "#29B6F6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'lg': '0.5rem',
        'full': '9999rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
