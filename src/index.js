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

export default {
  /**
   * Cloudflare Workers entrypoint (Module Worker format).
   * @param {Request} request
   */
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '/home') {
      return new Response(homePage, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
        },
      });
    }

    return new Response('404 Not Found', {
      status: 404,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    });
  },
};
