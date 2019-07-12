/*
 * @Author: Truong Tran
 * @Date:   2019-04-10 17:43:22
 * @Last Modified by:   Truong Tran
 * @Last Modified time: 2019-04-10 18:18:56
 */
const crypto = require('crypto');
const secret = 'eb2acbe1065f6e3e7695610b33be4828';
const axios = require('axios')
const apiKey = 'c16d248737bb5ec9b872d8f19f4ad10a'
let start = async () => {
    let timestamp = new Date() / 1    
    let requestPath = '/open/api/get_trades'  
    let method = 'GET'
    let symbol ='eosusdt'    
    let plainTextForSign =  'symbol'+ symbol+ 'api_key' + apiKey + 'time' + timestamp + secret
    let sign = crypto.createHash('md5').update(plainTextForSign).digest("hex");        
    let queryString = `?symbol=${symbol}&api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    console.log(plainTextForSign)
    console.log(queryString)    
    let resp = await axios.get(`https://openapi.biki.com${requestPath}${queryString}`, {                
    })
    console.log(resp.data)
    console.log(sign, timestamp)

}
start()