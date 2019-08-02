const axios = require('axios');
let start = async () => {
    let address ='tbnb1n65cljtdkfqd0cv90lj64hl2u7thvll695psjl'
    let api  = 'https://testnet-dex.binance.org/api/v1/orders/open'
    let res = await axios.get( api + '?address='+address, {                
    })
    console.log(res.data)   

}
start()