const express = require('express');
const { booksRouter, usersRouter } = require('./router/router');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send('ok');
});

app.use('/books', booksRouter);
app.use('/users', usersRouter);

const port = 3333;

app.listen(port, () => {
  console.log(`Api rodando port ${port}`);
});
