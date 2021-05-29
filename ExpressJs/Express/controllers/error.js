const path = require('path');
const rootDir = require('../util/path');


exports.errorPage = (req,res) => {
    res.status(404).sendFile(path.join(rootDir,'views','error.html'));
}