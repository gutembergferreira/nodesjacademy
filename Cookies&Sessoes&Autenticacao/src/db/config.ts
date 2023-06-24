import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123123',
  database: 'MYDB',
  logging: false,
});

export default connection;
