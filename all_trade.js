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
    let requestPath = '/open/api/cancel_order_all'  
    let method = 'GET'

    let symbol ='eosusdt'
    let startDate ='2011-05-18 15:20:12'
    let endDate =  '2020-05-18 15:20:12'
    // let startDate ='1554971280305'
    // let endDate =  '1554971325378'
    let pageSize = 20 
    let page =1 

    let plainTextForSign =  'symbol'+ symbol+ 'api_key' + apiKey + 'time' + timestamp + secret    
    //let plainTextForSign =  'symbol'+ symbol+ 'startDate' + startDate +'endDate' + endDate +'pageSize'+ pageSize+ 'page'+page +'api_key' + apiKey + 'time' + timestamp + secret
    let sign = crypto.createHash('md5').update(plainTextForSign).digest("hex");        
    let queryString = `?symbol=${symbol}&api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    //let queryString = `?symbol=${symbol}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}?page=${page}&api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    //let queryString = `?symbol=${symbol}&startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}&page=${page}&api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    console.log(plainTextForSign)
    console.log(queryString)    
    //let resp = await axios.get(`https://openapi.biki.com${requestPath}${queryString}`, {        
    let resp = await axios.post(`https://api.biki.com${requestPath}`,  {        
        symbol: symbol,
        api_key: apiKey,
        time: timestamp,
        sign: sign
    })

    console.log(resp.data)
    console.log(sign, timestamp)

}
start()