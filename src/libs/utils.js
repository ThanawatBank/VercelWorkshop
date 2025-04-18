function collectBodyData(request)
{   
    let body = ""
    return new Promise( (resolve) => {
        request.on("data", (chunk) => {
            body += chunk.toString()
        })

        request.on("end", () => {
            try {
              const data = JSON.parse(body);
              
              resolve(data)
            }catch(excp){
                console.log('Error !!!!!\n')
                console.log(excp)
                console.log("------")
                console.log(body)
                resolve({})
            }
        })
    })
}
// -------------------------------------------
module.exports = {
                    collectBodyData
}