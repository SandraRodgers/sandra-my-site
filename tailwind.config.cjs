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
        // Simple 8 row grid
        9: "repeat(9, minmax(0, 1fr))",
      },
    },
  },
  plugins: ["postcss-import"],
};
