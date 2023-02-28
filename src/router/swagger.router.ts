import swaggerJSDoc from 'swagger-jsdoc';
import Router from 'koa-router';
import { Context } from 'koa';
const swaggerRouter = new Router();

const options = {
  swaggerDefinition: {
    info: {
      // API informations (required)
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A sample API' // Description (optional)
    },
    host: `localhost:3000`, // Host (optional)
    basePath: '/' // Base path (optional)
  },
  apis: ['./src/router/*'] // all api
};

const swaggerSpec = swaggerJSDoc(options); // swaggerSpec 就是生成的api json
swaggerRouter.get('/swagger.json', async (ctx: Context) => {
  ctx.body = swaggerSpec;
});

export default swaggerRouter;
