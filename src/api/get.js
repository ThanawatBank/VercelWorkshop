const data_shop = require('../data/weapon_shop')
const weapon_stat = require('../data/weapon_stat')
//-----------------------------------------------
function get(request)
{
    let result = JSON.stringify({message:"API not found"})
    if(request.url === '/api/weapon_stat')
        {
            result = JSON.stringify(weapon_stat)
        }
    if(request.url === '/api/weapon_shop')
        {
            result = JSON.stringify(data_shop)
        }
        

    return result
}
//-----------------------------------------------
module.exports = get