module.exports = async question => {
  try {
    return (await Promise.all([
      require('./baidu')(question),
      require('./sogou')(question)
    ])).join(' ')
  } catch (e) {
    console.error(e)
    return ''
  }
}
