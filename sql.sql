DROP TABLE books
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"


CREATE TABLE books (
  id uuid DEFAULT uuid_generate_v4 (),
  nome varchar(100) UNIQUE,
  escritor text,
  ano INT,
  genero text,
  paginas INT,
  PRIMARY KEY (id)
)

