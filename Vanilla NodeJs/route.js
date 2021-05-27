const fs = require('fs');



const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
      
      fs.readFile('message.txt', (err,file) => {
         const data = file.toString();

         res.statusCode = 200;
         res.write('<html>')
         res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><div>${data}<form  action = "/message"  method = "POST"><input id = "send" type = "text" name="title"><button onclick ="document.getElementById('send').value += '-' window.localStorage.getItem('username')" type ="submit">Send</button></form></div></body>`)
            res.write('</html>')
             res.end();  
          })
      return
               
    }

    if(url === '/message' && method === 'POST'){
    const body = [];
     req.on('data', (chunk) => {
       body.push(chunk);
     })
    
    
   return req.on('end', () => {
         const bodyParsed = Buffer.concat(body).toString();
         const message = `${bodyParsed.split('=')[1]}`;
    
        fs.appendFile('message.txt', message, (err) =>{
         res.statusCode = 301;
         res.setHeader('Location','/');
        return res.end();
                       
     })
     })

    
    
    }
    
    if(url === '/login'){
    
    
      res.write(`<html><form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/product" method="POST">
    
        <input id="username" type="text" name="title">
    
        <button type="submit">add</button>
    
    </form></html>`);
    
      return res.end();
    }
    
    if(url === '/product' && method === 'POST')
    {
    
        res.statusCode = 301;
        res.setHeader('Location','/');
        res.end();
        return 
     
    }
    
         res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>This is a message from Node JS</h1></body>')
         res.write('</html>')
        return res.end(); 
}


 // module.exports = requestHandler;

/* module.exports = {
    handler : requestHandler,
} */

exports.handler = requestHandler;