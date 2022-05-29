module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      biz: ["'BIZ UDPMincho'", "serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFF",
      gray: "#D9D9D9",
      one: "#EFB198",
      two: "#F5E090",
      three: "#CEF3DB",
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
    extend: {},
  },
  plugins: ["postcss-import"],
};
