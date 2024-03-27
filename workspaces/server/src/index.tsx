import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { App } from '../../client/src/app';

const app = express();

const createHTML = (content: string) => {
  return `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <script src="/index.js" defer></script>
      </head>
    </html>
    <body>
      <div id="root">${content}</div>
    </body>
  `;
};

const CLIENT_DIST_DIR = path.resolve(__dirname, '../../client/dist');
app.get('*', express.static(CLIENT_DIST_DIR));
console.log(CLIENT_DIST_DIR);

app.get('*', async (req, res) => {
  const component = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );
  res.send(createHTML(component));
});

app.listen(4000, () => {
  console.log('listening on localhost:4000');
});
