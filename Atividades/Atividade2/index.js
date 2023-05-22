const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const server = http.createServer((req, res) => {
  const directory = process.argv[2]; // Obtém o nome do diretório a partir do parâmetro passado na linha de comando

  // Verifica se o diretório foi informado
  if (!directory) {
    res.statusCode = 400;
    res.end('Diretório não informado.');
    return;
  }

  // Verifica se o diretório existe
  if (!fs.existsSync(directory)) {
    res.statusCode = 404;
    res.end('Diretório não encontrado.');
    return;
  }

  // Lê o conteúdo do diretório
  fs.readdir(directory, (err, files) => {
    if (err) {
      res.statusCode = 500;
      res.end('Erro ao ler o diretório.');
      return;
    }

    // Cria uma lista HTML com os arquivos e subdiretórios
    const fileList = files.map((file) => {
      const filePath = path.join(directory, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      const link = isDirectory ? `${file}/` : file;
      return `<li><a href="${link}">${file}</a></li>`;
    }).join('');

    // Cria a página HTML com a lista de arquivos e subdiretórios
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Lista de Arquivos</title>
        </head>
        <body>
          <h1>Lista de Arquivos</h1>
          <ul>${fileList}</ul>
        </body>
      </html>
    `;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});