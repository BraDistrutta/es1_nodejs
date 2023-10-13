const http = require('http');

let server = http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err);
    } ).on('data', (data) => {
        console.log(data);
    });
    response.writeHead(200, {'Content-Type': 'text/plain'/*, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Max-Age': '86400',
        'Access-Control-Expose-Headers': 'Content-Type', 'Access-Control-Allow-Headers': 'X-Requested-With'*/});
    response.write('Shut up lil nigga');
    response.end('Get a job lil nigga');
})

