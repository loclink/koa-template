import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { autoRegisterRouter, registerGlobalMiddleware } from './common';
import corsStrategy from './cors';
import serve from 'koa-static';
import path from 'path';
import registerSwagger from '../swagger';
const app = new Koa();

app.use(registerSwagger(app));
app.use(corsStrategy);
app.use(serve(path.resolve(__dirname, '../../public')));
app.use(bodyParser());
app.use(registerGlobalMiddleware(app));
autoRegisterRouter(app);

export default app;
