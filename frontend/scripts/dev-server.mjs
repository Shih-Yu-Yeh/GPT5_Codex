import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { createReadStream, statSync, existsSync } from 'fs';
import { extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const srcDir = join(rootDir, 'src');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function resolveFile(urlPath) {
  if (urlPath === '/' || urlPath === '') {
    return join(publicDir, 'index.html');
  }

  const directPublic = join(publicDir, urlPath);
  if (existsSync(directPublic) && statSync(directPublic).isFile()) {
    return directPublic;
  }

  const srcRelativePath = urlPath
    .replace(/^\/?src\//, '')
    .replace(/^\//, '');
  const directSrc = join(srcDir, srcRelativePath);
  if (existsSync(directSrc) && statSync(directSrc).isFile()) {
    return directSrc;
  }

  return null;
}

async function requestHandler(req, res) {
  const filePath = resolveFile(req.url ?? '/');

  if (!filePath) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Not Found');
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? 'application/octet-stream';
  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);

  if (ext === '.html') {
    const content = await readFile(filePath, 'utf8');
    res.end(content);
    return;
  }

  createReadStream(filePath).pipe(res);
}

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '127.0.0.1';

createServer((req, res) => {
  requestHandler(req, res).catch((error) => {
    console.error('Error while serving request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  });
}).listen(port, host, () => {
  console.log(`Development server running at http://${host}:${port}`);
});
