import ip from 'ip';
import app from './app';
import { APP_PORT } from './app/config';
import { createDatabaseConnect } from './app/database';

app.listen(APP_PORT, async () => {
  console.log('服务器启动成功：');
  await createDatabaseConnect();
  console.log(`GET:  http://${ip.address()}:${APP_PORT}/user`);
});
