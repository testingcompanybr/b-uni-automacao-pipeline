'use strict';

const { AllureCucumberJS } = require('allure-cucumberjs');

class CustomAllureFormatter extends AllureCucumberJS {
  constructor(options) {
    super({
      ...options,
      resultsDir: 'allure-results', // diretório de saída
    });
  }
}

module.exports = CustomAllureFormatter;