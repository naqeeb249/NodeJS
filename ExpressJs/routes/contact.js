const express = require('express');

const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');


router.get('/contact',(req,res) => {
    res.sendFile(path.join(rootDir,'views','contact.html'));
})

router.post('/success',(req,res) => {
res.sendFile(path.join(rootDir,'views','success.html'));
})



module.exports = router;