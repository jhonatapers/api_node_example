const app = require('express')();
const routes = require('./routes/AppRoute')
const config = require('./config/env')

app.use(routes)

app.listen(config.apiPort, () => {
  console.log(
    `API Server started and listening on ${config.apiProtocol}://${config.apiUrl}:${config.apiPort}/ (${config.env})`
  );
});