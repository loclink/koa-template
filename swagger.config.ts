import swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API' // Description (optional)
  },
  host: `localhost:3000`, // Host (optional)
  basePath: '/' // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ['./src/router/*'] // all api
};

const swaggerSpec = swaggerJSDoc(options); // swaggerSpec 就是生成的api json
export default swaggerSpec;
