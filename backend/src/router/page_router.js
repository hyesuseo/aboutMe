const router = require("express").Router();
const ctrl = requrire("../controller/aboutMe")

router.get('/page', (req,res)=>{
    res.send('');
})

router.get('/', ctrl.views.main);
//기본 화면

module.exports =router;