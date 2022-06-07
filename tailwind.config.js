module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  purge: [
    './components/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './classable/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}'
  ]
}
