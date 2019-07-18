const BnbApiClient = require('@binance-chain/javascript-sdk');
const axios = require('axios');

const asset = 'BNB'; // asset string
const amount = 0.000123; // amount float
const addressTo = 'tbnb1v4veuu96hl4ev0vntua4m3anvv758a04ss7z0s'; // addressTo string

const message = 'Trường Trần Midas Protocol'; // memo string
const api = 'https://testnet-dex.binance.org/'; /// api string
//const addressFrom ="tbnb1czr5w6pjgn6mvfwvysw54fk4hdk5l8vxxyvhtt"

let privKey = 'af8c545fd5f3e7f53b37b3c6750dc585ef21e80ac3907b5636fa9af019b36db5'; // privkey hexstring (keep this safe)

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
      return bnbClient.transfer(addressFrom, addressTo, amount, asset, message, sequence)
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