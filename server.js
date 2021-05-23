const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
const method = req.method;
if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action = "/message"  method = "POST"><input type = "text" name="message"><button type ="submit">Send</button></form></body>')
     res.write('</html>')
     return res.end(); 
}
if(url == '/message' && method == 'POST'){
const body = [];
 req.on('data', (chunk) => {
   body.push(chunk);
 })

req.on('data', () => {
     const bodyParsed = Buffer.concat(body).toString();
     const message = bodyParsed.split('=')[1];
    fs.writeFile('message.txt', message, (err) =>{
       
                   
 })
 })
return req.on('end', () => {
  
    fs.readFile('message.txt', (err,file) => {
        console.log(file);
        const buf = Buffer.from(file);
        const readData = buf.toString();
      
        res.statusCode = 302;
        res.setHeader('Location', '/');
       
      res.write(`<html><body><h1>${readData}</h1></body></html>`);
      console.log(readData);
   
    return res.end();
        
    })
})


}

res.write('<html>')
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><h1>This is a message from Node JS</h1></body>')
     res.write('</html>')
    return res.end(); 

})

server.listen(8000);