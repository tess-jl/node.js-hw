// var server = require('./server.js'); 
// var router = require('./router.js'); 

// server.start(router.route); 

// var server = require('./server.js'); 
// var router = require('./router.js'); 
// var requestHandlers = require('./requestHandlers'); 

// var handle = {}; 

// //a simple and clean way to map diffeent URLs to the same request handler
// handle['/'] = requestHandlers.start; 

// handle['/start'] = requestHandlers.start; 
// handle['/upload'] = requestHandlers.upload; 

// server.start(router.route, handle); 

//page 41
var server = require('./server.js'); 
var router = require('./router.js'); 
var requestHandlers = require('./requestHandlers'); 

var handle = {}; 

//a simple and clean way to map diffeent URLs to the same request handler
handle['/'] = requestHandlers.start; 

handle['/start'] = requestHandlers.start; 
handle['/upload'] = requestHandlers.upload; 
handle['/show'] = requestHandlers.show; 

server.start(router.route, handle); 