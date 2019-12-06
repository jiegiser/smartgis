module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  global: {
    document: false
  },
  rules: {
    // "max-len": ['error', { 'code': 140 }], // 最大一行字符200
    'space-before-function-paren': [
      'error',
      {
        // 针对函数括号前的空格
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    semi: ['error', 'never'],
    'no-multi-spaces': [
      'error',
      {
        // 只允许忽略行尾注释前的多个空格
        ignoreEOLComments: true
      }
    ],
    'no-trailing-spaces': 'off', // 允许行尾有空格，但严格上不允许这么设置
    'no-unused-vars': ['error', { args: 'none' }], // 函数内参数可以定义未使用，主要考虑在catch
    'no-console': 'off' // 非必要情况下，还是在生产环境下打开
  }
}
