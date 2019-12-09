//add placeholder function for every request handler, export as methods of the module 
// function start() {
//     console.log("Request handler 'start' was called. "); 
// }

// function upload() {
//     console.log("request handler 'upload' was called. ");
// }

// exports.start = start; 
// exports.upload = upload; 

//going to be using objects as associative arrays!

//DO NOT CHANGE REQ HANDLERS TO THIS: 
// function start() {
//     console.log("Request handler 'start' was called. "); 
//     return 'Hello Start'; 
// }

// function upload() {
//     console.log("request handler 'upload' was called. ");
//     return 'Hello upload'; 
// }

// exports.start = start; 
// exports.upload = upload;
//because returning causes problems

//blocking page 26
// function start() {
//     console.log("Request handler 'start' was called. "); 
//     function sleep(milliSeconds) {
//         var startTime = new Date().getTime(); 
//         while (new Date().getTime() < startTime + milliSeconds); 
//     }
//     sleep(10000); 
//     return 'Hello Start'; 
// }

// function upload() {
//     console.log("request handler 'upload' was called. ");
//     return 'Hello upload'; 
// }

// exports.start = start; 
// exports.upload = upload;


//page 27, exec executes shell comman from within Node.js
// var exec = require("child_process").exec; 
// function start() {
//     console.log("Request handler 'start' was called. "); 
//     var content = 'empty';
//     exec('ls -lah', function(error, stdout, stderr) {
//         content = stdout;
//     });
//     return content; 
// }

// function upload() {
//     console.log("request handler 'upload' was called. ");
//     return 'Hello upload'; 
// }

// exports.start = start; 
// exports.upload = upload;

//doesn't work because exec makes use of a callback function to work non-blocking, therefore our own code is executed synchronous but exec operates async

//page 29- inject the response object (from servers callback function onRequest) through the router into the request handlers

//page 30
// var exec = require('child_process').exec; 
// function start(res) {
//     console.log("Request handler 'start' was called. "); 

    
//     exec('ls -lah', function(error, stdout, stderr) {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.write(stdout);        
//         res.end(); 
//     });
// }

// function upload(res) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello uplaod');        
//     res.end(); 
// }

// exports.start = start; 
// exports.upload = upload;

//page 31
// var exec = require('child_process').exec; 
// function start(res) {
//     console.log("Request handler 'start' was called. "); 
    
//     exec('find /',
//         { timeout: 10000, maxBuffer: 20000*1024 }, 
//         function(error, stdout, stderr) {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.write(stdout);        
//             res.end(); 
//         });
// }

// function upload(res) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello uplaod');        
//     res.end(); 
// }

// exports.start = start; 
// exports.upload = upload;

//page 32 
// var exec = require('child_process').exec; 
// function start(res) {
//     console.log("Request handler 'start' was called. "); 
    
//     var body = '<html>' + 
//         '<head>' +
//         '<meta http-equiv="Content-Type" content="text/html; ' +
//         'charset=UTF-8" />' +
//         '</head>' +
//         '<body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" rows="20" cols="60"></textarea>' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body>' +
//         '</html>';
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write(body);        
//     res.end(); 
// }

// function upload(res) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello uplaod');        
//     res.end(); 
// }

// exports.start = start; 
// exports.upload = upload;

//page 36-37
// var querystring = require('querystring'); 
// function start(res, postData) {
//     console.log("Request handler 'start' was called. "); 
    
//     var body = '<html>' + 
//         '<head>' +
//         '<meta http-equiv="Content-Type" content="text/html; ' +
//         'charset=UTF-8" />' +
//         '</head>' +
//         '<body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" rows="20" cols="60"></textarea>' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body>' +
//         '</html>';
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(body);        
//     res.end(); 
// }

// function upload(res, postData) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('You sent' + querystring.parse(postData).text);        
//     res.end(); 
// }

// exports.start = start; 
// exports.upload = upload;

//page 40 
// var querystring = require('querystring'),
//     fs = require('fs');

// function start(res, postData) {
//     console.log("Request handler 'start' was called. "); 
    
//     var body = '<html>' + 
//         '<head>' +
//         '<meta http-equiv="Content-Type" content="text/html; ' +
//         'charset=UTF-8" />' +
//         '</head>' +
//         '<body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" rows="20" cols="60"></textarea>' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body>' +
//         '</html>';
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(body);        
//     res.end(); 
// }

// function upload(res, postData) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('You sent' + querystring.parse(postData).text);        
//     res.end(); 
// }

// function show(res) {
//     console.log('Request handler show was called');
//     res.writeHead(200, { 'Content-Type': 'text/png' });
//     fs.createReadStream('/tmp/test.png').pipe(res);
// }

// exports.start = start; 
// exports.upload = upload;
// exports.show = show;
//having trouble executing as is on page 41

// var querystring = require('querystring'),
//     fs = require('fs');

// function start(res, postData) {
//     console.log("Request handler 'start' was called. "); 
    
//     var body = '<html>' + 
//         '<head>' +
//         '<meta http-equiv="Content-Type" content="text/html; ' +
//         'charset=UTF-8" />' +
//         '</head>' +
//         '<body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" rows="20" cols="60"></textarea>' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body>' +
//         '</html>';
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(body);        
//     res.end(); 
// }

// function upload(res, postData) {
//     console.log("request handler 'upload' was called. ");
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('You sent the text' + querystring.parse(postData).text);        
//     res.end(); 
// }

// function show(res) {
//     console.log('Request handler show was called');
//     res.writeHead(200, { 'Content-Type': 'image/png' });
//     fs.createReadStream('/tmp/test.png').pipe(res);
// }

// exports.start = start; 
// exports.upload = upload;
// exports.show = show;

//page 44
var querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable'); 

function start(res) {
    console.log("Request handler 'start' was called. "); 
    
    var body = '<html>' + 
        '<head>' +
        '<meta http-equiv="Content-Type" ' + 'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' + 'method="post">' +
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);        
    res.end(); 
}

function upload(res, req) {
    console.log("request handler 'upload' was called. ");

    var form = new formidable.IncomingForm(); 
    console.log('about to parse');
    form.parse(req, function(error, fields, files) {
        console.log('parsing done'); 
        fs.rename(files.upload.path, '/tmp/test.png', function(error) {
            if (error) {
                fs.unlink('/tmp/test.png');
                fs.rename(files.upload.path, '/tmp/test.png');
            }
        });
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('received image: <br/>');
        res.write("<img src='/show' />");  
        res.end(); 
    });
}

function show(res) {
    console.log('Request handler show was called');
    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start; 
exports.upload = upload;
exports.show = show;