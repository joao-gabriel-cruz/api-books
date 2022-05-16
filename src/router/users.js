const router = require('express').Router();

const pool = require('../data/conect');

const usersRouter = router;

usersRouter.get('/', (request, response) => {
  pool.query('select * from users  ', (err, res) => {
    if (err) {
      console.log(err.message);
      response.send(err.message);
    } else {
      console.log(res.rows);
      response.send(res.rows);
    }
  });
});

usersRouter.post('/', (request, response) => {
  const users = request.body;
  console.log(users);

  pool.query(
    `INSERT INTO users (nome, cpf, senha ) VALUES (
        '${users.nome}', '${users.cpf}', '${users.senha}'
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

usersRouter.get('/:id', (request, response) => {
  const id = request.params.id;
  console.log(id);
  pool.query(`SELECT * FROM users WHERE id = '${id}'`, (err, res) => {
    if (err) {
      console.log(err.message);
      response.status(404).send(err);
    } else {
      console.log(res.rows);
      response.send(res.rows);
    }
  });
});

usersRouter.put('/:id', (request, response) => {
  const user = request.body;
  const id = request.params.id;
  pool.query(
    `UPDATE users SET 
  nome = '${user.nome}',
  senha = '${user.senha}',
  cpf =' ${user.cpf}' WHERE id = '${id}' `,
    (err, res) => {
      if (err) {
        console.log(err);
        response.status(404).send();
      } else {
        console.log('ok');
        response.status(204).send();
      }
    }
  );
});

usersRouter.delete('/:id', (request, response) => {
  const id = request.params.id;
  pool.query(`DELETE FROM users WHERE id = '${id}'`, (err, res) => {
    if (err) {
      console.log(err);
      response.status(404).send();
    } else {
      console.log(res);
      response.status(204).send();
    }
  });
});

module.exports = usersRouter;
