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
        '${users.nome}', '${users.cpf}', '${users.ano}'
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

module.exports = usersRouter;
