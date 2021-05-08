const request = require('request')

const urlApi = 'https://api.twitch.tv/kraken/games/top'
const ClinetID = '74he4pztmjascwandvn064e4c12nft'
request(
  {
    url: urlApi,
    headers: {
      'Client-ID': ClinetID,
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  }, (err, response, body) => {
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
    for (const i of jsonData.top) {
      console.log(`${i.viewers} ${i.game.name}`)
      // console.log(i.viewers + ' ' + i.game.name)
    }
  }
)
