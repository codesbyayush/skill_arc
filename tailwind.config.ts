import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkGray: "hsl(var(--custom-background-leetcode))",
        backgroundBlack: "hsl(var(--custom-black-leetcode))",
        lightGray: "hsl(var(--custom-light-black-leetcode))",

          'custom-text': {
            50: "hsl(var(--custom-text-50))",
            100: "hsl(var(--custom-text-100))",
            200: "hsl(var(--custom-text-200))",
            300: "hsl(var(--custom-text-300))",
            400: "hsl(var(--custom-text-400))",
            500: "hsl(var(--custom-text-500))",
            600: "hsl(var(--custom-text-600))",
            700: "hsl(var(--custom-text-700))",
            800: "hsl(var(--custom-text-800))",
            900: "hsl(var(--custom-text-900))",
            950: "hsl(var(--custom-text-950))",
          },
          'custom-background': {
            50: "hsl(var(--custom-background-50))",
            100: "hsl(var(--custom-background-100))",
            200: "hsl(var(--custom-background-200))",
            300: "hsl(var(--custom-background-300))",
            400: "hsl(var(--custom-background-400))",
            500: "hsl(var(--custom-background-500))",
            600: "hsl(var(--custom-background-600))",
            700: "hsl(var(--custom-background-700))",
            800: "hsl(var(--custom-background-800))",
            900: "hsl(var(--custom-background-900))",
            950: "hsl(var(--custom-background-950))",
          },
          'custom-primary': {
            50: "hsl(var(--custom-primary-50))",
            100: "hsl(var(--custom-primary-100))",
            200: "hsl(var(--custom-primary-200))",
            300: "hsl(var(--custom-primary-300))",
            400: "hsl(var(--custom-primary-400))",
            500: "hsl(var(--custom-primary-500))",
            600: "hsl(var(--custom-primary-600))",
            700: "hsl(var(--custom-primary-700))",
            800: "hsl(var(--custom-primary-800))",
            900: "hsl(var(--custom-primary-900))",
            950: "hsl(var(--custom-primary-950))",
          },
          'custom-secondary': {
            50: "hsl(var(--custom-secondary-50))",
            100: "hsl(var(--custom-secondary-100))",
            200: "hsl(var(--custom-secondary-200))",
            300: "hsl(var(--custom-secondary-300))",
            400: "hsl(var(--custom-secondary-400))",
            500: "hsl(var(--custom-secondary-500))",
            600: "hsl(var(--custom-secondary-600))",
            700: "hsl(var(--custom-secondary-700))",
            800: "hsl(var(--custom-secondary-800))",
            900: "hsl(var(--custom-secondary-900))",
            950: "hsl(var(--custom-secondary-950))",
          },
          'custom-accent': {
            50: "hsl(var(--custom-accent-50))",
            100: "hsl(var(--custom-accent-100))",
            200: "hsl(var(--custom-accent-200))",
            300: "hsl(var(--custom-accent-300))",
            400: "hsl(var(--custom-accent-400))",
            500: "hsl(var(--custom-accent-500))",
            600: "hsl(var(--custom-accent-600))",
            700: "hsl(var(--custom-accent-700))",
            800: "hsl(var(--custom-accent-800))",
            900: "hsl(var(--custom-accent-900))",
            950: "hsl(var(--custom-accent-950))",
          },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;

export default config;


