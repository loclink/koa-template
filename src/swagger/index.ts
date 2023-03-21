import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import { koaSwagger } from 'koa2-swagger-ui';
import Router from 'koa-router';
import path from 'path';

import type Koa from 'koa';
import type { Context } from 'koa';

const swaggerRouter = new Router();
const options: Options = {
  swaggerDefinition: {
    openapi: '3.0.0',

    info: {
      // API informations (required)
      title: 'API Docs', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A sample API' // Description (optional)
    },
    basePath: '/',
    schemes: ['http', 'https'], // Base path (optional)
    components: {
      schemas: {
        authLogin: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  apis: [path.resolve(__dirname, '../router/*/*')] // all api
};
const swaggerSpec = swaggerJSDoc(options); // swaggerSpec 就是生成的api json
swaggerRouter.get('/docs.json', async (ctx: Context) => {
  ctx.body = swaggerSpec;
});

const registerSwagger = (app: Koa) => {
  app.use(swaggerRouter.routes());
  app.use(swaggerRouter.allowedMethods());

  const swagger = koaSwagger({
    routePrefix: '/docs',
    swaggerOptions: {
      url: '/docs.json' // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    }
  });

  return swagger;
};

export default registerSwagger;
