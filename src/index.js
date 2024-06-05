const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const client = require('./grpc/client.js');

// Servir arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/html/index.html'));
});


app.post('/', (req, res) => {
  const request = {
    text: req.body.text,
    target_language: req.body.target,
  };

  console.log(client)

  client.traduzirTexto(request, (resp) => {
    res.json({
      'texto': resp
    })
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
