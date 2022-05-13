const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
