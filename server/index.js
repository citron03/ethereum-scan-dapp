const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const getTxByAccount = require('./infuraAPI/getTxByAccount').getTxByAccount;
const getAccountData = require('./infuraAPI/getAccountData').getAccountData;

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

app.get('/balance', (req, res) => {
    getAccountData("지갑 주소");
    res.send({"message" : "good"});
});

app.listen(port, () => {
    console.log('Listening...');
});