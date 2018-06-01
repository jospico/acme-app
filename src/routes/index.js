const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.render('index.html');
    //res.send('Hello World');
});

module.exports = router;