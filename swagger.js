const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User CRUD API',
      version: '1.0.0'
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
      ? 'https://himalkumar-api-readiness-1.onrender.com'
      : 'http://localhost:5000'
      }
    ]
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJSDoc(options);