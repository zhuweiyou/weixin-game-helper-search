/* global describe, it */

const assert = require('assert')
const answer = require('../src')

function maxIndex (array) {
  return array.map((item, index) => ({item, index}))
    .sort((a, b) => b.item - a.item)
    .shift()
    .index
}

describe('测试', () => {
  it('中国的首都在北京', async () => {
    assert(maxIndex(await answer({
      question: '中国的首都在哪里？',
      options: [
        '上海',
        '北京',
        '深圳',
        '南京'
      ]
    })) === 1)
  })

  it('《红楼梦》的作者是曹雪芹', async () => {
    assert(maxIndex(await answer({
      question: '《红楼梦》的作者是谁？',
      options: [
        '施耐庵',
        '吴承恩',
        '曹雪芹',
        '罗贯中'
      ]
    })) === 2)
  })
})
