import http from 'http';

const PORT = 3000;

const homePage = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Home</title>
</head>
<body>
  <h1>Smart Home</h1>
  <p>Добро пожаловать на главную страницу!</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(homePage);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
