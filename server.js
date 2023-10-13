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
        params: ${infoUrl.search}`/*,
        headers: ${JSON.stringify(request.headers)},
        rawHeaders: ${JSON.stringify(request.rawHeaders)},
        trailers: ${JSON.stringify(request.trailers)},
        rawTrailers: ${JSON.stringify(request.rawTrailers)},
        setTimeout: ${request.setTimeout},
        socket: ${request.socket},
        connection: ${request.connection},
        complete: ${request.complete},
        aborted: ${request.aborted},
        httpVersionMajor: ${request.httpVersionMajor},
        httpVersionMinor: ${request.httpVersionMinor},
        upgrade: ${request.upgrade},
        statusCode: ${request.statusCode},
        statusMessage: ${request.statusMessage},
        client: ${request.client},
        _consuming: ${request._consuming},
        _dumped: ${request._dumped},
        _events: ${JSON.stringify(request._events)},
        _eventsCount: ${request._eventsCount},
        _maxListeners: ${request._maxListeners},
        connection: ${request.connection},
        _header: ${request._header},
        _headers: ${JSON.stringify(request._headers)},
        _headerNames: ${JSON.stringify(request._headerNames)},
        _onPendingData: ${request._onPendingData},
        _sent100: ${request._sent100},
        _expect_continue: ${request._expect_continue},
        req: ${request.req},
        writable: ${request.writable},
        _last: ${request._last},
        upgrading: ${request.upgrading},
        chunkedEncoding: ${request.chunkedEncoding},
        shouldKeepAlive: ${request.shouldKeepAlive},
        useChunkedEncodingByDefault: ${request.useChunkedEncodingByDefault},
        sendDate: ${request.sendDate},
        _removedConnection: ${request._removedConnection},
        _removedContLen: ${request._removedContLen},
        _removedTE: ${request._removedTE},
        _contentLength: ${request._contentLength},
        _hasBody: ${request._hasBody},
        _trailer: ${request._trailer},
        finished: ${request.finished},
    `;*/

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


