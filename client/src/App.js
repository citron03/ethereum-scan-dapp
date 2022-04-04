import {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkArea from './components/LinkArea';
import TransactionByAccount from './components/TransactionByAccount';
import ContractData from './components/ContractData';
import AccountData from './components/AccountData';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div> ...로딩중입니다.</div>}>
                    <LinkArea/>
                </Suspense>
                <Routes>
                    <Route exact path="/" element={<TransactionByAccount/>} />
                    <Route path="/contract" element={<ContractData/>} />
                    <Route path="/account" element={<AccountData/>} />
                </Routes>
            </BrowserRouter>      
        </div>
    );
}

export default App;
