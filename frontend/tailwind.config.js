/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* -------------------------
         Typography (authoritative, calm)
      -------------------------- */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      /* -------------------------
         Color system (cosmic, restrained)
      -------------------------- */
      colors: {
        space: {
          DEFAULT: "#0b0d12",
          deep: "#07090f",
          soft: "#11131a",
        },

        starlight: {
          DEFAULT: "#e6e8ee",
          muted: "#a1a6b3",
          faint: "#6b7280",
        },

        cosmic: {
          blue: "#7aa2ff",
          violet: "#b38bff",
          amber: "#f5c07a",
        },
      },

      /* -------------------------
         Backgrounds (very subtle)
      -------------------------- */
      backgroundImage: {
        "cosmic-fade":
          "radial-gradient(1200px at 50% 20%, rgba(122,162,255,0.08), transparent 60%)",
      },

      /* -------------------------
         Shadows (never harsh)
      -------------------------- */
      boxShadow: {
        glow: "0 0 40px rgba(122,162,255,0.15)",
        soft: "0 10px 30px rgba(0,0,0,0.4)",
      },

      /* -------------------------
         Motion discipline
      -------------------------- */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        slow: "800ms",
        slower: "1200ms",
      },

      /* -------------------------
         Letter spacing (headings only)
      -------------------------- */
      letterSpacing: {
        wide: "0.08em",
        wider: "0.12em",
      },

      /* -------------------------
         Layout rhythm
      -------------------------- */
      maxWidth: {
        content: "1200px",
        narrow: "880px",
      },
    },
  },

  plugins: [],
};
