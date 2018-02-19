const answer = require('../src')

;(async () => {
  console.log(await answer({
    question: '中国的首都在哪里？',
    options: [
      '上海',
      '北京',
      '深圳',
      '南京'
    ]
  }))

  console.log(await answer({
    question: '《红楼梦》的作者是谁？',
    options: [
      '施耐庵',
      '吴承恩',
      '曹雪芹',
      '罗贯中'
    ]
  }))
})()
