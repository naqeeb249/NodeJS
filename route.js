const fs = require('fs');



const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message"  method = "POST"><input type = "text" name="message"><button type ="submit">Send</button></form></body>')
         res.write('</html>')
         return res.end(); 
    }
    if(url === '/message' && method === 'POST'){
    const body = [];
     req.on('data', (chunk) => {
       body.push(chunk);
     })
    
    
    req.on('data', () => {
         const bodyParsed = Buffer.concat(body).toString();
         const message = `${bodyParsed.split('=')[1]}`;
    
        fs.writeFile('message.txt', message, (err) =>{
          /* res.statusCode = 302;
          res.setHeader('Location', '/'); */
                       
     })
     })
    return  req.on('end', () => {
      
        fs.readFile('message.txt', (err,file) => {
            
            const buf = Buffer.from(file);
            const readData = buf.toString();
          
            
           
             res.writeHead(301, {
              'Location': '/',
              'Content-Type': 'text/plain'
              
          }); 
          
       
          /*   res.write('<html>')
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<html><h1>${readData}</h1>`);
            res.write('<body><form action = "/message"  method = "POST"><input type = "text" name="message"><button type ="submit">Send</button></form></body>')
             res.write('</html>') */
        
       console.log(readData);
        return res.end(readData);
            
        })
    })
    
    
    }
    
    if(url === '/login'){
    
    
      res.write(`<html><form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/message" method="POST">
    
        <input id="username" type="text" name="title">
    
        <button type="submit">add</button>
    
    </form></html>`);
    
      return res.end();
    }
    
    if(url === '/product' && method === 'POST')
    {
    const body = [];
      req.on('data',(chunk) => {
      body.push(chunk);
      })
    
      return req.on('end',() => {
        const bodyParsed = Buffer.concat(body).toString();
        const username = bodyParsed.split('=')[1];
        console.log(username);
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      })
     
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