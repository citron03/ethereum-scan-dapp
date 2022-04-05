const getCa = (abi, account) => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({abi, account})
    }
    return fetch("http://localhost:8080/contract", options);
}

export default getCa;