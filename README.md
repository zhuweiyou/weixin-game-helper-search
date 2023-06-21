# search

[![GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/game-helper/search.svg?branch=master)](https://travis-ci.org/game-helper/search)

基于搜索引擎的问答匹配度查询，目前使用了百度和搜狗搜索

> 目前用于 [zhuweiyou/weixin-game-helper](https://github.com/zhuweiyou/weixin-game-helper) 答题类辅助，没有正确答案时提交推荐答案

## 安装

```bash
npm i zhuweiyou/weixin-game-helper-search
```

## 示例

```js
const search = require('weixin-game-helper-search')

;(async () => {
  const {result, index, maxIndex, minIndex} = await search({
    question: '《红楼梦》的作者是谁？',
    options: [
      '施耐庵',
      '吴承恩',
      '曹雪芹',
      '罗贯中'
    ]
  })
  console.log(result) // [0, 0, 13，0] 数值越大的表示搜索结果越匹配，理论上该选项为正确答案的几率更高
  console.log(index) // 2 推荐的答案，一般为匹配度最高的答案（如果题目中包含否定词汇，匹配度最低为推荐答案）
  console.log(minIndex) // 匹配度最低的答案
  console.log(maxIndex) // 匹配度最高的答案
})()
```
