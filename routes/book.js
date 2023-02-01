const { saveBook } = require('../src/commands/book')
const { getBook, getBookForAuthors } = require('../src/queries/book')


const book = (app) => {
    app.get('/book', async (req, res) => {
        try {
            const books = await getBook()
            res.json(books)
        } catch (e) {
            console.log(e)
        }
    })

    app.get('/book/:authorId', async (req, res) => {
        const { authorId } = req.params
        try {
            const books = await getBookForAuthors(authorId)
            res.json(books)
        } catch (e) {
            console.log(e)
        }
    })


    app.post('/book', async (req, res) => {
        const book = req.body
        try {
            const books = await saveBook(book)
            res.json(books)
        } catch (e) {
            console.log(e)
        }
    })
}




module.exports = { book }