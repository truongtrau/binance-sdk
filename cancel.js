const BnbApiClient = require('@binance-chain/javascript-sdk');
const axios = require('axios');

const asset = 'BNB'; // asset string
//const amount = 0.000123; // amount float
const amount = 8; // amount float
const addressTo = 'tbnb1n65cljtdkfqd0cv90lj64hl2u7thvll695psjl'; // addressTo string

const message = ''; // memo string
const api = 'https://testnet-dex.binance.org/'; /// api string
//const addressFrom ="tbnb1czr5w6pjgn6mvfwvysw54fk4hdk5l8vxxyvhtt"

let privKey = '14fd0747c04b481c0a18cf1eef698420b8b21ea5355601fe046fff8aa993e667'; // privkey hexstring (keep this safe)

const bnbClient = new BnbApiClient(api);

const httpClient = axios.create({ baseURL: api });


bnbClient.chooseNetwork("testnet"); // or this can be "mainnet"
bnbClient.setPrivateKey(privKey);
bnbClient.initChain();


const addressFrom = bnbClient.getClientKeyAddress(); // sender address string (e.g. bnb1...)
console.log(addressFrom)

//const addressFrom = bnbClient.getClientKeyAddress(); // sender address string (e.g. bnb1...)
const sequenceURL = `${api}api/v1/account/${addressFrom}/sequence`;
console.log('sequenceURL: '+ sequenceURL)
httpClient
  .get(sequenceURL)
  .then((res) => {      
      const sequence = res.data.sequence || 0      
      console.log(asset)
      console.log(sequence)
      let symPair  = "TOMOB-1E1_BNB"
      let side = 2 // 1 = buy, 2  = sell
      let orderId  = "9EA98FC96DB240D7E1857FE5AADFEAE797767FFA-6"      
      return bnbClient.cancelOrder(addressFrom,symPair , orderId, sequence)
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