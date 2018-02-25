const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async question => {
  const {data} = await axios({
    method: 'GET',
    url: `https://www.sogou.com/web?query=${encodeURIComponent(question)}`,
    responseType: 'text',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
    }
  })
  return cheerio.load(data)('#main').text()
}
