const { json } = require('express/lib/response')
const responseModel = require('../models/ResponseModel')

module.exports = {

    async sameText(req, res){
        let response = {...responseModel}
        
        return json(response)
    }

}