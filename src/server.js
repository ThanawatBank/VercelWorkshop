const http = require('http')
const get = require('./api/get')
//-----------------------------------------------
const PORT = 9799
//-----------------------------------------------
function onClientReq(request , response)
{
    response.writeHead( 200 )

    response.write(get(request))

    response.end()

}
//-----------------------------------------------
const server = http.createServer(onClientReq)
console.log('Server is running at '+PORT)
server.listen( PORT )
