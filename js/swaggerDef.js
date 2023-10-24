const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Dökümantasyonu',
      version: '1.0.0',
      description: 'API için Swagger belgeleri.',
    },
    servers: [
      {
        url: 'http://localhost:3000', // API'nizin adresi
      },
    ],
  },
  apis: ['./routes/*.js'], // API rotalarının bulunduğu dizini ayarlayın
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
