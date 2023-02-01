const { client } = require("./database/config")
client.connect().then(res => console.log("sql connected")).catch(err => console.log(err))
const { book } = require("./routes/book")
const {author} = require("./routes/author")
const bodyParser = require("body-parser")


const express = require('express');
const app = express();
app.use(bodyParser.json())
book(app)
author(app)




const port = 4000
app.listen(port, () => {
    console.log('Your app is listening on port ' + port);
});