const { saveAuthor } = require('../src/commands/author')

const author = (app) => {
    app.post('/author', async (req, res) => {
        const author = req.body
        try {
            const authors = await saveAuthor(author)
            res.json(authors)
        } catch (e) {
            console.log(e)
        }
    })
}


module.exports = { author }