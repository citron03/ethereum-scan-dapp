const getTx = (account, startBlock, endBlock) => {
    const options = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                account,
                startBlock,
                endBlock
            })
    }
    return fetch("http://localhost:8080/accounts", options);
}

export default getTx;