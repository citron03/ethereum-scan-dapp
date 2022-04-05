const Contract = require('web3-eth-contract');

const getContractData = (abi, cAddress) => {
    try {
        Contract.setProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`);

        const contract = new Contract(abi, cAddress);
        // console.log(Object.keys(contract.methods));
        return {
            "address": contract._address,
            "methods": Object.keys(contract.methods),
            "jsonInterface": contract._jsonInterface,
        };

    } catch(e) {
        console.log(e);
    }
}

module.exports =  {
    getContractData
};
