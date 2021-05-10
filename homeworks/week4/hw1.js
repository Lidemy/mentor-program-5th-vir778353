const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, response, body) => {
    if (err) {
      console.log('err', err)
      return
    }
    let jsonBooks
    try {
      jsonBooks = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    for (const i of jsonBooks) {
      console.log(`${i.id} ${i.name}`)
    }
  }
)
