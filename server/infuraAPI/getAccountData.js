const Web3 = require('web3');
require("dotenv").config();
const rpcURL = `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`; // 원격 이더리움 노드에 접속할 수 있는 주소

const web3 = new Web3(rpcURL); // web3 객체 생성

const getAccountData = (account) => {
    web3
    .eth
    .getBalance(account)
    .then((bal) => {
        console.log(`지갑 ${account}의 잔액은... ${bal} wei 입니다.`);
        return web3
            .utils
            .fromWei(bal, "ether"); // web3.utils.fromWei 를 사용해 ether 단위로 변경
    })
    .then((eth) => {
        console.log(`이더 단위로는 ${eth} ETH 입니다.`);
    });
}

module.exports =  {
    getAccountData
};