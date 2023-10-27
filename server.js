const http = require('http');
const url = require('url');

let server = http.createServer((request, response) => {
    /*request.on('error', (err) => {
        console.error(err);
    } ).on('data', (data) => {
        console.log(data);
    });*/
    let indirizzo = request.headers.host + request.url;
    let infoUrl = url.parse(indirizzo, true);

    let testoResponse = `
        url: ${request.url},<br>
        host: ${request.headers.host},<br>
        method: ${request.method},<br>
        pathname: ${infoUrl.pathname},<br>
        params: ${infoUrl.search},<br>
        headers: ${JSON.stringify(request.headers)},<br>
        rawHeaders: ${JSON.stringify(request.rawHeaders)},<br>
        trailers: ${JSON.stringify(request.trailers)},<br>
        rawTrailers: ${JSON.stringify(request.rawTrailers)},<br>
        setTimeout: ${request.setTimeout},<br>
        socket: ${request.socket},<br>
        connection: ${request.connection},<br>
        complete: ${request.complete},<br>
        aborted: ${request.aborted},<br>
        httpVersionMajor: ${request.httpVersionMajor},<br>
        httpVersionMinor: ${request.httpVersionMinor},<br>
        upgrade: ${request.upgrade},<br>
        statusCode: ${request.statusCode},<br>
        statusMessage: ${request.statusMessage},<br>
        client: ${request.client},<br>
        _consuming: ${request._consuming},<br>
        _dumped: ${request._dumped},<br>
        _events: ${JSON.stringify(request._events)},<br>
        _eventsCount: ${request._eventsCount},<br>
        _maxListeners: ${request._maxListeners},<br>
        connection: ${request.connection},<br>
        _header: ${request._header},<br>
        _headers: ${JSON.stringify(request._headers)},<br>
        _headerNames: ${JSON.stringify(request._headerNames)},<br>
        _onPendingData: ${request._onPendingData},<br>
        _sent100: ${request._sent100},<br>
        _expect_continue: ${request._expect_continue},<br>
        req: ${request.req},<br>
        writable: ${request.writable},<br>
        _last: ${request._last},<br>
        upgrading: ${request.upgrading},<br>
        chunkedEncoding: ${request.chunkedEncoding},<br>
        shouldKeepAlive: ${request.shouldKeepAlive},<br>
        useChunkedEncodingByDefault: ${request.useChunkedEncodingByDefault},<br>
        sendDate: ${request.sendDate},<br>
        _removedConnection: ${request._removedConnection},<br>
        _removedContLen: ${request._removedContLen},<br>
        _removedTE: ${request._removedTE},<br>
        _contentLength: ${request._contentLength},<br>
        _hasBody: ${request._hasBody},<br>
        _trailer: ${request._trailer},<br>
        finished: ${request.finished},
    `;

    switch (infoUrl.pathname) {
        case '/':
        case 'zebby':
            sendResponse(testoResponse, infoUrl, response);
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("Nessuna risorsa disponibile");
            break;
    }

})

function sendResponse(testoResponse, infoUrl, response) {
    response.writeHead(200, {'Content-Type': 'text/html'/*, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Max-Age': '86400',
        'Access-Control-Expose-Headers': 'Content-Type', 'Access-Control-Allow-Headers': 'X-Requested-With'*/});
    response.write('Shut up lil nigga<br><br>');
    response.write(`${testoResponse}<br><br>`);
    response.write(`<img src="https://i1.sndcdn.com/artworks-000453415287-8wmt13-t500x500.jpg" width="100px"><br>`);
    response.end('Get a job lil nigga');
}
server.listen(6969)
console.log("Server sta spectando sulla porta 6969 (nice 2x)");


