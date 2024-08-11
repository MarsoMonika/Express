import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '..', 'client');

const app = express();
const PORT = 4400;

app.use('/static', express.static(clientDir));

app.get('/', (req, res) => {
  res.sendFile(join(clientDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});