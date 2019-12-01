// var http = require("http"); 

// //pass createServer anon function 
// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.write("Hello World");
//     res.end();
// }).listen(8888);

// //passing functions around 
// function say (word) {
//     console.log(word);
// }

// function execute (someFunction, value) {
//     someFunction(value);
// }

// execute(say, "hello"); 

// //anonymous function version 
// execute(function(word){ console.log(word)}, "Hello"); 

// //event-driven async callbacks 
// var result = database.query("SELECT * FROM hugetable"); 
// console.log("Hello World"); 

// //there is only one single process in the Node.js executuon model, therefore uses an event loop (event-driven async callbacks)
// database.query("SELECT * FROM hugetable", function(rows) {
//     var result = rows; 
// }); 
// console.log("Hello World"); 

// //re-done
// var http = require("http");
// function onRequest(req, res) {
//     console.log("req received"); 
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello World"); 
//     res.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log("server has started"); 

//req and res are objects, can use methods to handle details of the HTTP req 

//creating our own node modules and then using them 
// var http = require("http"); 
// function start() {
//     function onRequest(req, res) {
//         console.log("Request received. "); 
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Hello World"); 
//         res.end(); 
//     }
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started. ");
// }
// exports.start = start; 

//making different HTTP reqs point at different parts of code is called "routing", so we need to create a router module for this!
//code to execute = a collection of req handlers that do the actual work when a req is received 

//need additional node.js modules, url and querystring

// var http = require("http"); 
// var url = require("url"); 
// function start() {
//     function onRequest(req, res) {
//         var pathname = url.parse(req.url).pathname; 
//         console.log("Request for " + pathname + " received. "); 
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Hello World"); 
//         res.end(); 
//     }
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started. ");
// }
// exports.start = start; 

//now we can map reqs to our req handlers via URL path requested 

// var http = require('http'); 
// var url = require('url'); 
// function start() {
//     function onRequest(req, res) {
//         var pathname = url.parse(req.url).pathname; 
//         console.log('Request for ' + pathname + ' received. '); 

//         route(pathname); 
        
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('Hello World'); 
//         res.end(); 
//     }
//     http.createServer(onRequest).listen(8888);
//     console.log('Server has started. ');
// }
// exports.start = start; 

// after defining out handle object we need to change server.js (page 22)

var http = require('http'); 
var url = require('url'); 
function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname; 
        console.log('Request for ' + pathname + ' received. '); 

        //callback
        route(handle, pathname); 
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World'); 
        res.end(); 
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started. ');
}
exports.start = start; 