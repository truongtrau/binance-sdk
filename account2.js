/*
 * @Author: Truong Tran
 * @Date:   2019-04-10 17:43:22
 * @Last Modified by:   Truong Tran
 * @Last Modified time: 2019-04-10 18:18:56
 */
const crypto = require('crypto');
const secret = '105580de7b964dfeb66b94fca4ad6164';
const axios = require('axios')
const apiKey = '99b3871775ca73d3353beb707ff7dce3'
let start = async () => {
    //let timestamp = new Date() / 1
    let timestamp =1554964537387
    let requestPath = '/open/api/user/account'      
    let method = 'GET'    
    let plainTextForSign = 'api_key' + apiKey + 'time' + timestamp + secret
    let sign = crypto.createHash('md5').update(plainTextForSign).digest("hex");
    let queryString = `?api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    
    console.log(plainTextForSign)
    console.log(queryString)  
    console.log(timestamp)  
    console.log(sign)
    
    let resp = await axios.get(`https://api.biki.com${requestPath}${queryString}`, {                
    })
    console.log(resp.data.data)
    console.log(sign, timestamp)
}
start()