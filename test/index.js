/* global describe, it */

const assert = require('assert')
const search = require('../src')

describe('测试', () => {
  it('中国的首都在北京', async () => {
    assert((await search({
      question: '中国的首都在哪里？',
      options: [
        '上海',
        '北京',
        '深圳',
        '南京'
      ]
    })).maxIndex === 1)
  })

  it('《红楼梦》的作者是曹雪芹', async () => {
    assert((await search({
      question: '《红楼梦》的作者是谁？',
      options: [
        '施耐庵',
        '吴承恩',
        '曹雪芹',
        '罗贯中'
      ]
    })).maxIndex === 2)
  })
})
