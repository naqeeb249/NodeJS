
const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact');


const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoute);
app.use('/',shopRoute);
app.use('/',contactRoute);


app.use(express.static(path.join(__dirname,'public')));

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})




app.listen(3000);