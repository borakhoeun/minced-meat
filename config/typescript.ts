export const typescript = {
  typeCheck: {
    eslint: {
      files: './**/*.{ts,js,vue}'
    },
    issue: {
      exclude: [{ origin: 'eslint', file: 'static/sw,js' }]
    }
  }
}
