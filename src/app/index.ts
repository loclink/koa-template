import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { autoRegisterRouter, registerGlobalMiddleware } from './common';
import corsStrategy from './cors';
import serve from 'koa-static';
import path from 'path';

const app = new Koa();
app.use(corsStrategy);
app.use(
  serve(path.resolve(__dirname, '../../public'), {
    index: 'index.html'
  })
);
app.use(bodyParser());
app.use(registerGlobalMiddleware(app));
autoRegisterRouter(app);

export default app;
