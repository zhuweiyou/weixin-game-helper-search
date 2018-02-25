/* global describe, it */

const assert = require('assert')
const search = require('../src')

describe('肯定', () => {
  it('中国的首都在北京', async () => {
    const r = await search({
      question: '中国的首都在哪里？',
      options: [
        '上海',
        '北京',
        '深圳',
        '南京'
      ]
    })
    assert(r.index === 1)
  })

  it('《红楼梦》的作者是曹雪芹', async () => {
    const r = await search({
      question: '《红楼梦》的作者是谁？',
      options: [
        '施耐庵',
        '吴承恩',
        '曹雪芹',
        '罗贯中'
      ]
    })
    assert(r.index === 2)
  })
})

describe('否定', () => {
  it('七喜不属于可口可乐公司旗下产品', async () => {
    const r = await search({
      question: '下列哪种饮料不属于可口可乐公司旗下产品？',
      options: [
        '雪碧',
        '七喜',
        '芬达',
        '醒目'
      ]
    })
    assert(r.index === 1)
  })
})
