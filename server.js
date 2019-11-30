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
var http = require("http"); 
function start() {
    function onRequest(req, res) {
        console.log("Request received. "); 
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World"); 
        res.end(); 
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started. ");
}
exports.start = start; 
