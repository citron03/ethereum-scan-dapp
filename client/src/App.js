import {Suspense} from 'react';
import './App.css';
import TransactionByAccount from './components/TransactionByAccount';

function App() {
    return (
        <Suspense fallback={<div> ...로딩중입니다.</div>}>
            <div className="App">
                <TransactionByAccount/>
            </div>
        </Suspense>
    );
}

export default App;
