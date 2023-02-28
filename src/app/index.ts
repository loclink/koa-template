import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { autoRegisterRouter, registerGlobalMiddleware } from './common';
import corsStrategy from './cors';
import serve from 'koa-static';
import path from 'path';
import { koaSwagger } from 'koa2-swagger-ui';
const app = new Koa();

app.use(
  koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
      url: '/swagger.json' // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    }
  })
);
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
