const express = require('express')
const app = express()


const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const routes = require('./routes/Routes.js')
const config = require('./config/env');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)
app.use(express.json())

app.listen(config.apiPort, () => {
  console.log(
    `API Server started and listening on ${config.apiProtocol}://${config.apiUrl}:${config.apiPort}/ (${config.env})`
  );
});



