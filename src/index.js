const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

const {hello} = require('./test');

app.get('/', (req, res) => {
	res.json({message: 'Hello World!', test: hello()});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
