import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { autoRegisterRouter, registerGlobalMiddleware } from './common';
import corsStrategy from './cors';
const app = new Koa();

app.use(corsStrategy);
app.use(bodyParser());
app.use(registerGlobalMiddleware(app));
autoRegisterRouter(app);

export default app;
