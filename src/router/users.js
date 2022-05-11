const router = require('express').Router();
const pool = require('../data/conect');

const usersRouter = router;

usersRouter.get('/', (request, response) => {
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

module.exports = usersRouter;
