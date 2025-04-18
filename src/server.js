const http = require('http')
const utils = require('./libs/utils')
const get = require('./api/get')
//-----------------------------------------------
const PORT = process.env.PORT || 9799
//-----------------------------------------------
async function onClientReq(request , response)
{
    const method = request.method
    const header = 
    {
        "Content-Type" : "application/json"
    }



    response.writeHead( 200 , header )
    if(method === 'GET')
        {
        response.write(get(request))
        }else if(method === 'POST')
            {
              const bodydata = await  utils.collectBodyData(request)
              let result = {"message" : "Hi"}
                if(bodydata && bodydata.message)
                {
                    result = 
                    {
                        "message" : "Hi i am a server" 
                    }
                    response.write(JSON.stringify(result))
                }
            }

    response.end()

}
//-----------------------------------------------
const server = http.createServer(onClientReq)
console.log('Server is running at '+PORT)
server.listen( PORT )
