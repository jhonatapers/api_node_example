const router = require('express').Router()

router.get('/helloWord',
    async (req, res, _) => {
        res.json( { "HelloWorld": "Hello World" })
    }
)

router.get('/teste',
    async (req, res, _) => {
        let resp = await appController.getInstalled(req.session.userId);
        return res.status(resp.status).json(resp);
    }
);

router.patch('',
    async (req, res, _) => {
        
        return res.status(resp.status).json(resp);
    }
);

module.exports = router