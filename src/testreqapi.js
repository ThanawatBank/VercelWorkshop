const https      = require('https')
const utils      = require('./libs/utils')
// --------------------------------------------------------------
const URL = "https://vercel-workshop-blush.vercel.app/api/get_monsters"
// --------------------------------------------------------------
// http = 80 , https = 443
const options    = {
            host: 'vercel-workshop-blush.vercel.app',
            port: 443,
            method: "POST",
            path: "/api/get_monsters"
}
const payload = {
                    "monster_ids" : [1,3]
}
const reqeust_api = https.request( options , async (api_response) => {
    const result = await utils.collectBodyData( api_response )

    console.log( result )
})
reqeust_api.write( JSON.stringify(payload) )
reqeust_api.end()

