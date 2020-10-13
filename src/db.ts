import knex from 'knex';

let connection;

export const init = ({ host, user, password }) => {
  connection = knex({
    client: 'mssql',
    connection: {
      host,
      user,
      password,
      database: 'maxyall_prod',
      options: {
        encrypt: true
      },
      requestTimeout: 180000,
      connectTimeout: 120000
    }
  });
};

export default connection;
