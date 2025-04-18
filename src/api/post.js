const monster_data = require('../data/monsters_stat.json')
const utils        = require('../libs/utils')
// ------------------------------------------------------------
async function post(req)
{
    let result = JSON.stringify( { message: "API not found" } )

    // 
    if(req.url === '/api/get_monsters'){
       console.log( )
       const reqbody = await utils.collectBodyData(req)

       if( reqbody && reqbody.monster_ids && Array.isArray(reqbody.monster_ids) ){
            let resp_data = []

            reqbody.monster_ids.map( (monster_id) => {
                const found_monster = monster_data.find( monster_obj => 
                                        {   
                                            const monId = monster_obj.monster_id
                                            return parseInt(monId) === parseInt(monster_id) 
                                        })
                if( found_monster )
                    resp_data.push( found_monster )
            })

            result = JSON.stringify( resp_data )
       }
    }

    return result
}
// ------------------------------------------------------------
module.exports = post