'use strict'

module.exports = {
  name: 'layout',
  abstract: true,
  views: {
    '': {
      template: require('./template.html')
    },
    header: {
      template: require('./header.html')
    },
    footer: {
      template: require('./footer.html')
    }
  }
}