// function route(handle, pathname) {
//     console.log('about to route a req for ' + pathname); 
//     if (typeof handle[pathname] === 'function') {
//         //then handle this pathname
//         handle[pathname]();
//     } else {
//         console.log('no request handler found for ' + pathname);
//     }
// }

// exports.route = route; 

//editing router for demo of what not to do bc of the returns
// function route(handle, pathname) {
//     console.log('about to route a req for ' + pathname); 
//     if (typeof handle[pathname] === 'function') {
//         //then handle this pathname
//         return handle[pathname]();
//     } else {
//         console.log('no request handler found for ' + pathname);
//         return '404 not found'; 
//     }
// }

// exports.route = route; 

//page 30
// function route(handle, pathname, res) {
//     console.log('about to route a req for ' + pathname); 
//     if (typeof handle[pathname] === 'function') {
//         //then handle this pathname and pass res object on 
//         return handle[pathname](res);
//     } else {
//         console.log('no request handler found for ' + pathname);
//         res.writeHead(404, {'Content-Type': 'text/plain'}); 
//         res.write('404 not found');
//         res.end();
//     }
// }

// exports.route = route; 

//page 35 
// function route(handle, pathname, res, postData) {
//     console.log('about to route a req for ' + pathname); 
//     if (typeof handle[pathname] === 'function') {
//         //then handle this pathname and pass res object on 
//         handle[pathname](res, postData);
//     } else {
//         console.log('no request handler found for ' + pathname);
//         res.writeHead(404, { 'Content-Type': 'text/plain' }); 
//         res.write('404 not found');
//         res.end();
//     }
// }

// exports.route = route; 

//page 44
function route(handle, pathname, res, req) {
    console.log('about to route a req for ' + pathname); 
    if (typeof handle[pathname] === 'function') {
        //then handle this pathname and pass res object on 
        handle[pathname](res, req);
    } else {
        console.log('no request handler found for ' + pathname);
        res.writeHead(404, { 'Content-Type': 'text/plain' }); 
        res.write('404 not found');
        res.end();
    }
}

exports.route = route; 



