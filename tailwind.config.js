const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*", "./components/**/*.{js,jsx,ts,tsx}", "./layouts/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    colors: {
      primary: {
        light: '#0075F2',
        DEFAULT: '#0075F2',
        dark: '#054DD2',
        "50": "#fafcff",
        "100": "#fafcff",
        "200": "#d1e7ff",
        "300": "#9ecdff",
        "400": "#5cabff",
        "500": "#0076f5",
        "600": "#006fe6",
        "700": "#0068d6",
        "800": "#005ec2",
        "900": "#0056b3"
      },
      secondary: {
        light: '#333347',
        DEFAULT: '#2C2C3E',
        dark: '#20202e',
        darkest: '#191924',
        "50": "#11411410e",
        "100": "#f6f6f9",
        "200": "#bdbdd0",
        "300": "#8585a8",
        "400": "#555577",
        "500": "#2c2c3f",
        "600": "#262636",
        "700": "#20202d",
        "800": "#1c1c27",
        "900": "#15151e"
      },
      tertiary: {
        light: '#FF5A5F',
        DEFAULT: '#FF5A5F',
        dark: '#F44C40',
        "50": "#fffafa",
        "100": "#fffafa",
        "200": "#ffe0e1",
        "300": "#ffc2c4",
        "400": "#ff999c",
        "500": "#ff575c",
        "600": "#ff3d44",
        "700": "#fa0008",
        "800": "#db0007",
        "900": "#b80006"
      },
      'almost-black': '#0C0C0F',
      ...colors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};