//add placeholder function for every request handler, export as methods of the module 
function start() {
    console.log("Request handler 'start' was called. "); 
}

function upload() {
    console.log("request handler 'upload' was called. ");
}

exports.start = start; 
exports.upload = upload; 

//going to be using objects as associative arrays