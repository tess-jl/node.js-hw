function route(handle, pathname) {
    console.log('about to route a req for ' + pathname); 
    if (typeof handle[pathname] === 'function') {
        //then handle this pathname
        handle[pathname]();
    } else {
        console.log('no request handler found for ' + pathname);
    }
}

exports.route = route; 