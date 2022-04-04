const Web3 = require("web3");
require("dotenv").config();
const rpcURL = `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`;

const web3 = new Web3(rpcURL);


const getTxByAccount = async (account, startBlock, endBlock) => {
    let blocksTxs = [];
    for(let i = startBlock ; i <= endBlock; i++){
        await web3.eth.getBlock(i).then((obj) => {
            blocksTxs = blocksTxs.concat(obj.transactions);
          });
    }
    const txArr = [];
    for(let tx of blocksTxs){
        await web3.eth.getTransaction(tx).then((obj) => {
                if(obj.from === account || obj.to === account){
                    // 해당 계정이 참여한 트랜잭션만
                    txArr.push(obj);
                }
            });
    }
    return {txArr};
}

module.exports =  {
    getTxByAccount
};