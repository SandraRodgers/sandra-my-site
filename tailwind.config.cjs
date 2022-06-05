module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      ptmono: ["'PT Mono'", "monospace"],
      ptsans: ["'PT Sans'", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFF",
      gray: "#D9D9D9",
      one: "#EFB198",
      two: "#F5E090",
      three: "#9DFFC1",
      four: "#a3b5e3",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      gridTemplateRows: {
        // 9 row grid:
        9: "repeat(9, minmax(0, 1fr))",
      },
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
          "65%, 70%": { transform: "translateX(7ch)" },
          "75%, 80%": { transform: "translateX(8ch)" },
          "85%, 90%": { transform: "translateX(9ch)" },
          "95%, 100%": { transform: "translateX(11ch)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: ["postcss-import", require("@tailwindcss/typography")],
};
