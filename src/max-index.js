module.exports = array =>
  array.map((item, index) => ({item, index}))
    .sort((a, b) => b.item - a.item)
    .shift()
    .index
