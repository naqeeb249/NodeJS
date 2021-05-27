
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/get-product', (req,res) => {
    res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><input type = "number" name="size"><button>Send</button></form>');
})

app.post('/product', (req,res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use((req,res,next) => {
    
    res.send('<h1>Hello form Express</h1>');
    
})

app.listen(3000);