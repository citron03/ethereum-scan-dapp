const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const getTxByAccount = require('./infuraAPI/getTxByAccount').getTxByAccount;
const getAccountData = require('./infuraAPI/getAccountData').getAccountData;
const getContractData = require('./infuraAPI/getContractData').getContractData;

app.use(cors());
app.use(express.json()); // json-body-parser

app.get('/', (req, res) => {
    res.send('Hello Node.js!');
});

app.post('/accounts', (req, res) => {

    const {account, startBlock, endBlock} = req.body;
    // console.log(account, startBlock, endBlock); // 주소와 블록 시작, 블록 끝 번호
    if(account && startBlock && endBlock){
        const data = getTxByAccount(account, startBlock, endBlock);
        data
        .then(el => res.json(el))
        .catch(err => res.json(err));
    }else {
        res.send({"message" : "주소, 블록 시작, 끝 번호 모두 입력하세요."});
    }
});

app.post('/balance', (req, res) => {
    // console.log(req.body);
    const eth = getAccountData(req.body.account);
    eth.then(ele => {
        res.json(ele);
    }).catch((err) => {
        console.log(err);
        res.json({"message" : "ERROR"});
    })
});

app.post('/contract', (req, res) => {
    let = {abi, account} = req.body;
    abi = JSON.parse(req.body.abi);

    const data = getContractData(abi, account);
    if(data.address){
        res.json(data);
    } else {
        res.json({"message" : "ERROR"});
    }
});

app.listen(port, () => {
    console.log('Listening...');
});