const search = require('./search')
const sort = require('./sort')
const not = require('./not')
const result = require('./result')

module.exports = async ({question = '', options = []} = {}) => {
  const r = {
    result: result(await search(question), options)
  }
  const {minIndex, maxIndex} = sort(r.result)
  r.minIndex = minIndex
  r.maxIndex = maxIndex
  r.index = not(question) ? minIndex : maxIndex
  return r
}
