
const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact');


const bodyParser = require('body-parser');

const path = require('path');
const productsController = require('./controllers/error')

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoute);
app.use('/',shopRoute);
app.use('/',contactRoute);


app.use(express.static(path.join(__dirname,'public')));

app.use(productsController.errorPage);




app.listen(3000);