import { useState } from "react";
import getBalance from "../api/getBalance";

const AccountData = () => {

    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);

    const handleAccountData = () => {
        const data = getBalance(account);
        data.then(el => el.json())
            .then(eth => setBalance(eth))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <label>주소 : </label>
            <input type="text" placeholder="주소를 입력하세요" onChange={(e) => setAccount(e.target.value)} />
            <button onClick={handleAccountData}>검색</button>
            {balance.eth ?             
                <h1>{`지갑 ${account} 의 잔액은..! ${balance.eth} ETH 입니다.` }</h1> : null}
        </div>);
}

export default AccountData;