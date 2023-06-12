import { Request, Response } from 'express';
import path from 'path';
import { promises as fs } from 'fs';


const serverLorem = async (req: Request, res: Response) => {
    const url = req.url;
  
    if (url === '/lorem') {

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Language', 'pt-BR');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.render("app/lorem");
    } else if (url.startsWith('/lorem')) {
      const params = new URLSearchParams(url.slice(url.indexOf('?') + 1));
      const paragraphCount = params.get('count');
  
      if (paragraphCount && parseInt(paragraphCount) > 0 && parseInt(paragraphCount) <= 10) {
        let loremIpsum = '';
        for (let i = 0; i < parseInt(paragraphCount); i++) {
          loremIpsum += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat consectetur leo ut maximus. Sed dui elit, mollis ac efficitur ac, tristique sagittis lacus. Ut quis consectetur diam, eu convallis augue. Integer nisl ipsum, hendrerit id vulputate a, ultrices eu massa. Praesent vulputate sem ac turpis pellentesque hendrerit. Vivamus et diam pretium, volutpat urna vitae, varius elit. Ut fringilla arcu felis, eget pellentesque dolor maximus in. Integer sed elit eget urna dapibus euismod at ut dui. Morbi viverra eleifend ex, sed vehicula elit fringilla vel. Cras sed aliquet nisl.</p>';
        }
  
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Language', 'pt-BR');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(loremIpsum);
      } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Language', 'pt-BR');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Número inválido de parágrafos. Informe um valor entre 1 e 10.');
      }
    } else {
      const filePath = path.join(__dirname, url);
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const contentType = getContentType(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Language', 'pt-BR');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(fileContent);
      } catch (error) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Language', 'pt-BR');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Arquivo não encontrado');
      }
    }
  };



function getContentType(filePath: string): string {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
}

export default { serverLorem, getContentType };
