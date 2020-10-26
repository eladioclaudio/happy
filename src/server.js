// importar dependencia
const express = require('express');
const path = require('path');

// iniciando express
const server = express();

// utilizando arquivos estaticos
server.use(express.static('public'));

// criar uma rota

server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))    
})

// ligar o servidor
server.listen(5500)