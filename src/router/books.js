const router = require('express').Router();
const pool = require('../data/conect');

const booksRouter = router;

booksRouter.get('/', (request, response) => {
  pool.query('select * from books  ', (err, res) => {
    if (err) {
      console.log(err.message);
      response.send(err.message);
    } else {
      console.log(res.rows);
      response.send(res.rows);
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
  });
});

booksRouter.post('/', (request, response) => {
  const books = request.body;

  console.log(books);

  pool.query(
    `INSERT INTO books (nome, escritor, ano, genero, paginas ) VALUES (
      '${books.nome}', '${books.escritor}', '${books.ano}', '${books.genero}', '${books.paginas}'
    )`,
    (err, res) => {
      if (err) {
        console.log(err.message);
        response.send(err.message);
      } else {
        console.log('ok');
        response.status(204).send();
      }
    }
  );
});

booksRouter.get('/:id', (request, response) => {
  const id = request.params.id;
  pool.query(`SELECT * FROM books WHERE id = '${id}'`, (err, res) => {
    if (err) {
      console.log(err.message);
      response.send(err.message);
    } else {
      console.log(res.rows);
      response.send(res.rows);
    }
  });
});

booksRouter.put('/:id', (request, response) => {
  const id = request.params.id;
  const books = request.body;

  pool.query(
    `UPDATE books Set 
      nome = '${books.nome}',
      escritor = '${books.escritor}',
      ano = '${books.ano}',
      genero = '${books.genero}',
      paginas = '${books.paginas}'
      WHERE id = '${id}' `,
    (err) => {
      if (err) {
        console.log(err);
        response.send(err.message);
      } else {
        console.log('ok');
        response.status(204).send();
      }
    }
  );
});

booksRouter.delete('/:id', (request, response) => {
  const id = request.params.id;
  pool.query(`DELETE FROM books WHERE id = '${id}'`, (err) => {
    if (err) {
      console.log(err);
      response.status(404).send();
    } else {
      console.log('ok');
      response.status(204).send();
    }
  });
});
module.exports = booksRouter;
