const http = require('http');

const PORTA = 3000;
const HOST = '127.0.0.10';

const servidor = http.createServer((req, res) => {
  // Header 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // Rotas
  if (req.url === '/') {
    res.end('<h1>Seja bem-vindo</h1>');
    return;
  }

  if (req.url === '/canal') {
    res.end('<h1>CFB CURSOS</h1>');
    return;
  }

   if (req.url === '/curso') {
    res.end('<h1>Curso de node</h1>');
    return;
  }
  

  // Se não bater em nenhuma rota, devolve 404
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 - Página não encontrada</h1>');
});

servidor.listen(PORTA, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORTA}`);
});
