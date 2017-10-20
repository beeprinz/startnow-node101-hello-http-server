// write your code here
var http = require('http'); 
//you say to node fetch this http library, give it to me and create us a web server 

http.createServer(function (req, res) { //function creating the webserver, returns it on every request you give to it
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  //200 is successful status code, 404 is can't find the page
  //content type lets the browser know what we're giving it ex(html, css etc) we're saying here the content is plain text
  res.end('Hello World');
  //i'm going to end this response and this is what we're going to give the user
}).listen(8080, '127.0.0.1');
//port 8080 means your going to be at local host at this number
//refers to yourself and that your running your server on here
console.log('Server running at http://127.0.0.1:8080/');
//instead of console.log going to your browsers console it prints it out on the terminal 