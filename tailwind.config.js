module.exports = {
  darkMode: 'class',
  content: [
    './docs/**/*.{html,js,vue,ts,md}',
    './docs/.vitepress/**/*.{html,js,vue,ts,md}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    darkTheme: "dark",
  },
};
