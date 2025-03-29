const http = require('http')
//-----------------------------------------------
const PORT = 9799
//-----------------------------------------------
function onClientReq(request , response)
{
    response.writeHead( 200 )

    response.write('Hello World 2210511105008')

    response.end()

}
//-----------------------------------------------
const server = http.createServer(onClientReq)
console.log('Server is running at '+PORT)
server.listen( PORT )
