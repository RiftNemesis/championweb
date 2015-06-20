'use strict'

module.exports = {
  name: 'layout',
  abstract: true,
  views: {
    '': {
      template: require('./template.html')
    },
    header: require('./header/view'),
    footer: require('./footer/view') 
  }
}