const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ERP API',
      version: '1.0.0',
      description: 'ERP API Documentation',
    },
  },
  apis: ['./routes/*.js'], // API rotalarının bulunduğu dizini belirtin
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
