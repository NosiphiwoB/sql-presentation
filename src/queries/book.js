const { client } = require("../../database/config");


const getBook = async () => {
    try {
        const res = await client.query("SELECT * FROM book")
        return res.rows
    } catch (e) {
        console.log(e)
    }
}


const FindById = async (authorId) => {
    try {
        const res = await
            client.query("select * from book where book.author_id = $1",
                [authorId])
        return res.rows
    } catch (e) {
        console.log(e)
    }
}


const getBookForAuthors = async (authorId) => {
    try {
        const res = await
            client.query(` SELECT *FROM book INNER JOIN author  
        ON book.author_id = author.id WHERE 
        book.author_id = $1;`,
                [authorId])
        return res.rows
    } catch (e) {
        console.log(e)
    }
}


module.exports = { getBook, getBookForAuthors }



