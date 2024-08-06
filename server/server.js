import express from 'express';

const PORT = 4000;

const app = express();

app.listen(PORT, function () {
    console.log(`Your server is running on port: ${PORT}`);
  });