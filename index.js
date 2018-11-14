const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

// app.get('/', (req, res) => res.send('hello world'))
app.use(express.static('build'))
app.listen(port, () => console.log(`listening on ${port}`))