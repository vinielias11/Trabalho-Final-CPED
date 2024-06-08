const express = require('express');
const app = express();
const cors = require('cors');
const client = require('./grpc/client.js');
const server = require('./grpc/server.js');

app.use(express.json())
app.use(cors());

app.post('/', (req, res) => {
    const request = {
        text: req.body.texto,
        target_language: req.body.idioma,
    };

    client.traduzirTexto(request, (resp) => {
        res.json({
            'texto': resp
        })
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    server.initGRPC();
});
