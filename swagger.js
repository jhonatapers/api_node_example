const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/Routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/app.js')
})
