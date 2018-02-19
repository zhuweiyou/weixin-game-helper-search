# answer

基于搜索引擎的简单答题模块，暂时只使用了百度搜索

> 用于 [game-helper/weixin](https://github.com/game-helper/weixin) 答题类辅助没有正确答案时，搜索备用答案

## 使用

安装

```bash
npm i game-helper/answer
```

示例

```js
const answer = require('answer')

;(async () => {
  console.log(await answer({
    question: '《红楼梦》的作者是谁？',
    options: [
      '施耐庵',
      '吴承恩',
      '曹雪芹',
      '罗贯中'
    ]
  })) // [0, 0, 13，0] 数值越大的表示搜索结果越匹配，但不保证答案正确性
})()
```
