const {escapeRegExp} = require('lodash')

module.exports = (text = '', options = []) =>
  options.map(option => (text.match(new RegExp(escapeRegExp(option), 'img')) || {length: 0}).length)
