const result = require('./result')
const maxIndex = require('./max-index')
const baidu = require('./engine/baidu')

module.exports = async ({question, options}) => {
  const r = result(await baidu(question), options)
  return {
    result: r,
    maxIndex: maxIndex(r)
  }
}
