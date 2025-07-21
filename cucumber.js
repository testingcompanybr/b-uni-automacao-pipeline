module.exports = {
  default: {
    parallel: 1,
    requireModule: ['ts-node/register'],
    require: ['Steps/**/*.ts', 'Support/**/*.ts'],
    format: ['allure-cucumberjs/reporter'],
    formatOptions: {
      resultsDir: 'allure-results'
    },
    language: 'pt',
    retry: 2
  }
};