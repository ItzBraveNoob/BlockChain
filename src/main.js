const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');


const myWalletAddress = myKey.getPublic('hex');


const braveCoin = new Blockchain();


braveCoin.minePendingTransactions(myWalletAddress);


const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
braveCoin.addTransaction(tx1);


braveCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
braveCoin.addTransaction(tx2);

braveCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Hemu is ${braveCoin.getBalanceOfAddress(myWalletAddress)}`);

// Tempering with the chain
// braveCoin.chain[1].transactions[0].amount = 10;


console.log();
console.log('Blockchain valid?', braveCoin.isChainValid() ? 'Yes' : 'No');