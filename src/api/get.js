const data_shop = require('../data/shop.json')
const weapon_stat = require('../api/weapon_stat.json')
//-----------------------------------------------
function get(request)
{
    let result = JSON.stringify({message:"API not found"})
    if(request.url === '/api/weapon_stat')
        {
            const conv_data = JSON.stringify(weapon_stat)
        }
    if(request.url === '/api/shop')
        {
            const conv_data = JSON.stringify(data_shop)
        }
        

    return conv_data
}
//-----------------------------------------------
module.exports = get