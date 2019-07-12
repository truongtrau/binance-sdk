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
    let requestPath = '/open/api/user/account'      
    let method = 'GET'    
    let plainTextForSign = 'api_key' + apiKey + 'time' + timestamp + secret
    let sign = crypto.createHash('md5').update(plainTextForSign).digest("hex");
    let queryString = `?api_key=${apiKey}&time=${timestamp}&sign=${sign}`
    
   let apikey='7f9a792f-6e41-46e1-9972-818e375a66e5'
   let secret='F0B7E5EF97DFD97C2D3A01C05F07C53C'
   let passphrase ='truongtran@okex'


    const timestamp = Date.now() / 1000;
    const what = timestamp + method.toUpperCase() + path + (options.body || '');
    const hmac = crypto.createHmac('sha256', secret);
    const signature = hmac.update(what).digest('base64');




    return {
      key,
      passphrase,
      signature,
      timestamp
    };
  };


    console.log(plainTextForSign)
    console.log(queryString)  
    console.log(timestamp)  
    
    let resp = await axios.get(`https://openapi.biki.com${requestPath}${queryString}`, {                
    })
    console.log(resp.data.data)
    console.log(sign, timestamp)
}
start()