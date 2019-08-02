const BnbApiClient = require('@binance-chain/javascript-sdk');
const axios = require('axios');
const api = 'https://testnet-dex.binance.org/'; /// api string
let privKey = '14fd0747c04b481c0a18cf1eef698420b8b21ea5355601fe046fff8aa993e667'; // privkey hexstring (keep this safe)
const bnbClient = new BnbApiClient(api);
const httpClient = axios.create({ baseURL: api });
bnbClient.chooseNetwork("testnet"); // or this can be "mainnet"
bnbClient.setPrivateKey(privKey);
bnbClient.initChain();
const addressFrom = bnbClient.getClientKeyAddress(); // sender address string (e.g. bnb1...)
console.log(addressFrom)
const sequenceURL = `${api}api/v1/account/${addressFrom}/sequence`;
console.log('sequenceURL: '+ sequenceURL)
httpClient
  .get(sequenceURL)
  .then((res) => {      
      const sequence = res.data.sequence || 0            
      let symPair  = "TOMOB-1E1_BNB"
      let side = 1 // 1 = buy, 2  = sell
      let price = 1 
      let quantity   =  5.5 // amount
      return bnbClient.placeOrder(addressFrom,symPair ,side, price,quantity, sequence, 1)
  })
  .then((result) => {
      if (result.status === 200) {
        console.log('success', result.result[0].hash);
      } else {
        console.error('error', result);
      }
  })
  .catch((error) => {
    console.error('error', error);
  });