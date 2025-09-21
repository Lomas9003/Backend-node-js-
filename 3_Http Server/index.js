// we can create a http server using http module in node js
// http module is in built module in node js we don't have to install it using npm
// http module is used to create a server which can listen to requests from browser and send response to browser    
// we set port number to listen to requests from browser
// we can use any port number but we should avoid using port numbers which are already in use by other applications
// common port numbers are 80, 443, 3000, 5000, 8000 etc
// we should avoid using port numbers below 1024 as they are reserved for system use 

const http = require('http'); 
const fs = require('fs');


// res is the response from server to browser like we send html file to browser from server  
// req is the request from browser to server like we get post data from browser to server

const myServer = http.createServer((req, res) => {
    console.log("Request has been made from browser to server");
    const log = `${Date.now()}: New request recoived\n`;
    fs.appendFile('logs.txt', log, (err , data) => {
        res.end("Hello from the server to the browser");
    }); 
});

myServer.listen(8000, () => console.log("Server is listening on port 8000"));