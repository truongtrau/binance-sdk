const BnbApiClient = require('@binance-chain/javascript-sdk');
const crypto = require( "@binance-chain/javascript-sdk/lib/crypto")
const axios = require('axios');
console.log('Gen address from private key')
//const privateKey = crypto.generatePrivateKey()
let privateKey  = 'af8c545fd5f3e7f53b37b3c6750dc585ef21e80ac3907b5636fa9af019b36db5'
//console.log('1. privatekey: '+ privateKey2)
let publicKey  = crypto.getPublicKeyFromPrivateKey(privateKey)
let privateKey2  = crypto.getPrivateKeyFromMnemonic('economy black fossil book goddess mesh promote magnet flavor code teach shoe embody merge magnet child model limb similar awesome card armed hedgehog brand')
let publicKey2 = crypto.getPublicKeyFromPrivateKey(privateKey2)
let address2  = crypto.getAddressFromPublicKey(publicKey2,'tbnb')
let address  = crypto.getAddressFromPublicKey(publicKey,'bnb')
console.log(address)
console.log(privateKey2)
console.log(address2)



