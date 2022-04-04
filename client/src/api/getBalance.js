const getBalance = (account) => {
    const options = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({account})
    }
    return fetch("http://localhost:8080/balance", options);
}

export default getBalance;