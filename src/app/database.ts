import path from 'path';
import { DataSource } from 'typeorm';
import { KOA_ENV, MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from './config';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT ? parseInt(MYSQL_PORT) : 3306,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE ?? 'demo_database',
  synchronize: KOA_ENV === 'PRD' ? false : true,
  logging: process.argv.includes('log') ? true : false,
  entities: [path.join(__dirname, '../entity/*')]
});

// 创建数据库连接
const createDatabaseConnect = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('数据库连接成功');
    })
    .catch(async (err: Error) => {
      console.log(err);
    });
};

export { createDatabaseConnect };
