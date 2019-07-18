const BnbApiClient = require('@binance-chain/javascript-sdk');
const crypto = require( "@binance-chain/javascript-sdk/lib/crypto")
const axios = require('axios');
console.log('Gen address from private key')
//const privateKey = crypto.generatePrivateKey()
let privateKey2  = 'af8c545fd5f3e7f53b37b3c6750dc585ef21e80ac3907b5636fa9af019b36db5'
//console.log('1. privatekey: '+ privateKey2)
let publicKey  = crypto.getPublicKeyFromPrivateKey(privateKey2)
//console.log('publickey: '+ publicKey)
let address  = crypto.getAddressFromPublicKey(publicKey,'bnb')
