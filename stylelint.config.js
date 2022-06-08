module.exports = {
  extends: 'stylelint-config-recommended-vue',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {}
    }
  ]
}
