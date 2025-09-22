
// Expresse is a minimal and flexible Node.js web application framework
// that provides a robust set of features for web and mobile applications.
// It simplifies the process of building web applications and APIs
// by providing a set of tools and features that make it easier to handle routing, middleware, and HTTP requests and responses. 
// Express is built on top of the Node.js http module, which means that it can be used to create web servers and handle HTTP requests and responses.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from Express`);
}); 
app.get('/about', (req, res) => {
    console.log(req);
    res.send("Hello from About Us page");
});
app.get('/contact', (req, res) => {
    res.send("Hello from Contact Us page");
}); 

app.listen(8000, () => console.log("Server is listening on port 8000"));
// we can create a http server using http module in node js
// http module is in built module in node js we don't have to install it using npm  