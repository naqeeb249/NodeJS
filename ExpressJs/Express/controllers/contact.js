
const path = require('path');
const rootDir = require('../util/path');

exports.getContactPage = (req,res) => {
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.postContact = (req,res) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
    }