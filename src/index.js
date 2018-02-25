const result = require('./result')
const maxIndex = require('./max-index')
const engines = {
  baidu: require('./engine/baidu')
}

module.exports = async ({question = '', options = [], engine = 'baidu'}) => {
  const r = result(await engines[engine](question), options)
  return {
    result: r,
    maxIndex: maxIndex(r)
  }
}
