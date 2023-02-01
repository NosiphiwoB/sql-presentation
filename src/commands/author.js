const { client } = require('../../database/config')

const saveAuthor = async (author) => {
    const { name, age, race } = author
    try {
        const res = await client.query(
            `INSERT INTO "author" ("name" , "age" , "race")  
             VALUES ($1 , $2 , $3)`, [name, age, race]);
        return res.rows
    } catch (e) {
        console.log(e)
    }
}



module.exports = { saveAuthor }