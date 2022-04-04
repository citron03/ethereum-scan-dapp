import getTx from "../api/getTx";
import {useState} from "react";

const TransactionByAccount = () => {

    const [transaction, setTransaction] = useState([]);
    const [account, setAccount] = useState("");
    const [blockStart, setBlockStart] = useState(0);
    const [blockEnd, setBlockEnd] = useState(0);

    const handleAccountAndBlock = () => {
        const data = getTx(
            account,
            blockStart,
            blockEnd
        );
        data
            .then(el => el.json())
            .then(tx => setTransaction(tx.txArr[0]))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div>
                <h1>지갑 주소를 통해서 원하는 블록 위치에서 해당 주소와 연관된 트랜잭션을 찾아보세요!</h1>
                <div>
                    <label>주소를 입력하세요 </label>
                    <input type="text" onChange={(e) => setAccount(e.target.value)} />
                </div>
                <div>
                    <label>검색할 블록 start </label>
                    <input type="text" onChange={(e) => setBlockStart(e.target.value)} />
                </div>
                <div>
                    <label>검색할 블록 end </label>
                    <input type="text" onChange={(e) => setBlockEnd(e.target.value)} />
                </div>
                <button onClick={handleAccountAndBlock}>검색!</button>
            </div>
            <p>주소 : {account}</p>
            <p>블록 해시 : {transaction.blockHash}</p>
            <p>블록 넘버 : {transaction.blockNumber}</p>
            <p>가스비 : {transaction.gasPrice}</p>
            <p>보낸 사람 : {transaction.from}</p>
            <p>받는 사람 : {transaction.to}</p>
        </div>
    );
}

export default TransactionByAccount;