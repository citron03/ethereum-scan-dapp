import getCa from "../api/getCa";
import {useState} from "react";

const ContractData = () => {

    const [abi, setAbi] = useState([]);
    const [cAccount, setCAccount] = useState("");
    const [caData, setCaData] = useState({});

    const handleSearchCA = () => {
        getCa(abi, cAccount)
            .then(el => el.json())
            .then(ca => setCaData(ca))
            .catch(err => console.log(err));
        console.log(caData);
    }

    const showJsonInterface = (data) => {
        return JSON.stringify(data);
    }

    return (
    <div>
        <p>컨트랙트 데이터</p>
        <div>
            <label>컨트랙트 주소 : </label>
            <input type="text" placeholder="컨트랙트의 주소를 입력하세요" onChange={(e) => setCAccount(e.target.value)}/>
            <textarea rows="15" cols="50" onChange={(e) => setAbi(e.target.value)} defaultValue="ABI 데이터를 입력하세요"/>
            <button onClick={handleSearchCA}>검색!</button>
        </div>
        <div>
            <h2>검색 결과</h2>
            <p>컨트랙트 주소 : {caData.address}</p>
            <label>컨트랙트의 메소드들 : </label>
            {caData.methods ? caData.methods.map((el, idx) => {
                return <p key={idx}>{el}</p>
            }) : null}
            <label>json Interface : </label>
            <p>{caData.jsonInterface ? showJsonInterface(caData.jsonInterface[0]) : null}</p>
        </div>
    </div>);
}

export default ContractData;