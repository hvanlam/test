const express = require('express');
const app = express();
const port = 5001;

//app.get('/', (req,res) => res.sendFile('./index.html', {root: __dirname}));
app.get('/', (req,res) => res.send('hello world'));

app.listen(port, () => console.log('Example log listening at ' + port));
