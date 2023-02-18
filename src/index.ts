import ip from 'ip';
import app from './app';
import { APP_PORT, MYSQL_PORT } from './app/config';
import { createDatabaseConnect } from './app/database';
app.listen(APP_PORT, () => {
  console.log(typeof MYSQL_PORT, '---------------');

  console.log('服务器启动成功：');
  createDatabaseConnect();
  console.log(`http://${ip.address()}:${APP_PORT}`);
});
