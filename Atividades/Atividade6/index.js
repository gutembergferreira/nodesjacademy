import { createLinkFiles } from './create_link.mjs'
import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const server = http.createServer((req, res) => {
  const directory = process.argv[2];

  if (!directory) {
    res.statusCode = 400;
    res.end('Diretório não informado.');
    return;
  }

  if (!fs.existsSync(directory)) {
    res.statusCode = 404;
    res.end('Diretório não encontrado.');
    return;
  }

  const url = req.url === '/' ? '' : req.url;
  const filePath = path.join(directory, url);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erro ao ler o arquivo.');
        return;
      }

      const parentDirectory = path.dirname(url);
      const backButton = parentDirectory !== '/' ? `<a href="${parentDirectory}">Voltar</a>` : '<a href="${parentDirectory}">Voltar</a>';

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Conteúdo do Arquivo</title>
          </head>
          <body>
            <h1>Conteúdo do Arquivo</h1>
            ${backButton}
            <hr>
            <br><br>
            <pre>${data}</pre>
          </body>
        </html>
      `;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  } else {
    fs.readdir(directory, (err, files) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erro ao ler o diretório.');
        return;
      }

      const fileList = files.map((file) => {
        const filePath = path.join(directory, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        const link = isDirectory ? `${file}/` : file;
        const filelink = createLinkFiles(link, file);
        return filelink;
      }).join('');
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
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});