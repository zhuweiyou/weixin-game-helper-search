module.exports = array => {
  array = array.map((item, index) => ({item, index}))
    .sort((a, b) => a.item - b.item)
  return {
    minIndex: array[0].index,
    maxIndex: array[array.length - 1].index
  }
}
