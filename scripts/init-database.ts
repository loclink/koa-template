import mysql from 'mysql2';
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from '../src/app/config';
import { createDatabaseConnect } from '../src/app/database';

const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
});

const createDatabase = () => {
  return new Promise((resolve, reject) => {
    db.query(`CREATE DATABASE ${MYSQL_DATABASE}`, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const initDatabase = async () => {
  await createDatabase()
    .then(() => {
      console.log('数据库创建成功');
    })
    .catch((err: Error) => {
      if (err.message.includes('database exists')) console.log('数据库已存在');
    });

  await createDatabaseConnect();

  process.exit(0);
};

initDatabase();
