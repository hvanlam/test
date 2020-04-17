let express = require('express');
let app = express();
let port = 5000;

app.get('/', (req,res) => {
  res.sendFile('./index.html', {root: _dirname});
});

app.listen(port, () => console.log('listening on port: ' + port));
