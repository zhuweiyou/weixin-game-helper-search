module.exports = question => [
  '未',
  '没有',
  '错误',
  '是错',
  '不是',
  '不对',
  '不能',
  '不属于',
  '不可以',
  '不提供',
  '不包括',
  '不经过',
  '不正确',
  '不存在'
].some(word => question.indexOf(word) !== -1)
