/**
 * Local development API server — mirrors the Vercel function at api/create-checkout-session.js
 * Run with: npm run dev:api
 * CRA dev server proxies /api/* to this server via the "proxy" field in package.json
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load .env.local into process.env
const envFile = path.join(__dirname, '.env.local');
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8')
    .split('\n')
    .forEach(line => {
      const eq = line.indexOf('=');
      if (eq > 0) {
        const key = line.slice(0, eq).trim();
        const val = line.slice(eq + 1).trim();
        if (key) process.env[key] = val;
      }
    });
}

const handler = require('./api/create-checkout-session');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/create-checkout-session') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
      } catch {
        req.body = {};
      }
      handler(req, res);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
  console.log('Handles: POST /api/create-checkout-session');
});
