const { client } = require('../../database/config')

const saveBook = async (book) => {
    const { title, authorId } = book
    try {
        const res = await client.query(
            `INSERT INTO "book" ("title" , "author_id")  
             VALUES ($1 , $2)`, [title, authorId]);
        return res.rows
    } catch (e) {
        console.log(e)
    }
}



module.exports = { saveBook }