import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        small: "420px",
        ipad: "700px",
        mini: "900px",
        desktop: "1024px",
        large: "1280px",
      },
    },
    extend: {
      colors: {
        text: "[#282727]",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "var(--primary-foreground)",
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
      fontFamily: {
        outfit : ["Outfit", "sans-serif"]
      },
      backgroundImage: {
        // "dashboard-gradient" : "linear-gradient(180deg, #DCEEE5 0%, #F7F9F8 100%)",
        // "dashboard-gradient-reverse" : "linear-gradient(180deg, #F7F9F8 0%,  #DCEEE5 100%)",
        "blog-header-bg" : "url('/images/dummy/blog.jpg')",
        "blog-header-2-bg" : "url('/images/dummy/blog2.jpg')",
        // 'side-bar-btn-bg' : 'linear-gradient(to right, #0A1E5DF0, #153FC3D6)',
      },
      screens: {
        small: "420px",
        ipad: "700px",
        mini: "900px",
        desktop: "1024px",
        large: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config