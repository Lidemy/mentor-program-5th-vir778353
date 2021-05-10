const request = require('request')

const process = require('process')

const searchName = process.argv[2]

request(
  `https://restcountries.eu/rest/v2/name/${searchName}`,
  (err, response, body) => {
    if (err) {
      console.log('err', err)
      return
    }
    let jsonData
    try {
      jsonData = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    for (const i of jsonData) {
      console.log('=============')
      console.log(`國家：'${i.name}`)
      console.log(`首都：'${i.capital}`)
      console.log(`貨幣：'${i.currencies[0].code}`)
      console.log(`國碼：'${i.callingCodes[0]}`)
    }
  }
)
