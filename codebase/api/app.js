require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser');

require('./src/database/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/routes/index')(app);

app.listen(port, () => {
    console.log(`App is listening at ${port}`)
})