const axios = require('axios')
const cheerio = require('cheerio')
const escapeRegExp = require('lodash/escapeRegExp')

module.exports = async ({question, options}) => {
  let {data} = await axios({
    method: 'GET',
    url: `https://www.baidu.com/s?wd=${encodeURIComponent(question)}`,
    responseType: 'text',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
    }
  })
  data = cheerio.load(data)('#content_left').text()
  return options.map(option => ((data.match(new RegExp(escapeRegExp(option), 'img')) || {length: 0}).length))
}
