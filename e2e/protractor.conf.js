'use strict'
var path = require('path')

exports.config = {
  framework: 'cucumber',
  // TODO: move these to env keys?
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:80',
  specs: [path.resolve(__dirname,'./features')]
}
