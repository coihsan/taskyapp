const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const ngrok = require('ngrok');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, async (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);

    if (dev) {
      const url = await ngrok.connect(port);
      console.log(`> Ngrok tunnel available at ${url}`);

      // Tambahkan logika untuk mengupdate Google OAuth redirect URI jika perlu
      console.log(`> Please update your Google OAuth redirect URI to: ${url}/api/auth/callback/google`);
    }
  });
});
