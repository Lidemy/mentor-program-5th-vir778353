const request = require('request')

const process = require('process')

const apiAddress = 'https://lidemy-book-store.herokuapp.com'

switch (process.argv[2]) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBook()
    break
  case 'delete':
    deleteBook()
    break
  case 'create':
    createBook()
    break
  case 'update':
    updateBook()
    break
  default:
    console.log('這是錯誤指令')
    break
}

function listBooks() {
  request(
    `${apiAddress}/books`,
    (err, response, body) => {
      if (err) {
        console.log('get error', err)
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
}

function readBook() {
  request(
    `${apiAddress}/books/${process.argv[3]}`,
    (err, response, body) => {
      if (err) {
        console.log('getError', err)
        return
      }
      let jsonBook
      try {
        jsonBook = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(jsonBook.name)
    }
  )
}

function createBook() {
  request.post(
    {
      url: `${apiAddress}/books`,
      form: {
        name: process.argv[3]
      }
    },
    (err, response, body) => {
      if (err) {
        console.log('getError', err)
        return
      }
      let jsonData
      try {
        jsonData = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(jsonData.name)
    }
  )
}

function deleteBook() {
  request.delete(
    `${apiAddress}/books/${process.argv[3]}`,
    (err, response, body) => {
      if (err) {
        console.log('getError', err)
        return
      }
      console.log('delete')
    }
  )
}

function updateBook() {
  request.patch(
    {
      url: `${apiAddress}/books/${process.argv[3]}`,
      form: {
        name: process.argv[4]
      }
    },
    (err, response, body) => {
      if (err) {
        console.log('getError', err)
        return
      }
      let jsonData
      try {
        jsonData = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(`${jsonData.name}，更新成功`)
    }
  )
}
