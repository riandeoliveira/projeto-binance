const criptoactives = {
    babyDogeCoin: {
        spentPurchase: 0,
        purchasePrice: 0,
        amountPurchased: 0,
        currentPrice: "",
    },

    bitcoin: {
        spentPurchase: 13,
        purchasePrice: 323615,
        amountPurchased: 0.00003995,
        currentPrice: "",
    },

    decentraland: {
        spentPurchase: 10.616,
        purchasePrice: 26.54,
        amountPurchased: 0.3996,
        currentPrice: "",
    },

    shibaInu: {
        spentPurchase: 10.10,
        purchasePrice: 0.00022,
        amountPurchased: 36781,
        currentPrice: "",
    },

    sushiSwap: {
        spentPurchase: "",
        purchasePrice: "",
        amountPurchased: "",
        currentPrice: "",
    },

    theSandbox: {
        spentPurchase: "",
        purchasePrice: "",
        amountPurchased: "",
        currentPrice: "",
    },

    axieInfinity: {
        spentPurchase: 15.66,
        purchasePrice: 783,
        amountPurchased: 0.01998,
        currentPrice: "",
    },

    cardano: {
        spentPurchase: 10.71,
        purchasePrice: 8.925,
        amountPurchased: 1.1988,
        currentPrice: "",
    },

    dogedoin: {
        spentPurchase: 11.043,
        purchasePrice: 1.227,
        amountPurchased: 9.974,
        currentPrice: "",
    },

    ethereum: {
        spentPurchase: 10.53,
        purchasePrice: 23346,
        amountPurchased: 0.0003996,
        currentPrice: "",
    },

    solana: {
        spentPurchase: 12.039,
        purchasePrice: 1203.9,
        amountPurchased: 0.00999,
        currentPrice: "",
    },
}

function calculateCurrentProfit(data, criptoNum, amountPurchased, spentPurchase) {
    teste1.textContent = `Bitcoin = ${((data[criptoNum].price * amountPurchased) - spentPurchase).toFixed(2)} BRL`;
}

const binanceAPI = "https://api.binance.com/api/v3/ticker/price";

setInterval(() => {
    fetch(binanceAPI)
        .then(response => response.json())
        .then(data => {
            // teste1.textContent = `Bitcoin = ${((data[1096].price * 0.00003995) - 13).toFixed(2)} BRL`;
            // calculateCurrentProfit(data, 1096, 0.00003995, 13);
            // teste2.textContent = `Decentraland = ${((data[1760].price * 0.3996) - 10.616).toFixed(2)} BRL`;
            // teste3.textContent = `Shiba Inu = ${((data[1463].price * 36781) - 10.10).toFixed(2)} BRL`;

            // teste4.textContent = `Axie Infinity = ${((data[1568].price * 0.01998) - 15.66).toFixed(2)} BRL`;
            // teste5.textContent = `Cardano = ${((data[1314].price * 1.1988) - 10.71).toFixed(2)} BRL`;
            // teste6.textContent = `Dogecoin = ${((data[1274].price * 9.974) - 11.043).toFixed(2)} BRL`;
            // teste7.textContent = `Ethereum = ${((data[1139].price * 0.0003996) - 10.53).toFixed(2)} BRL`;
            // teste8.textContent = `Solana = ${((data[1507].price * 0.00999) - 12.039).toFixed(2)} BRL`;
        });
}, 500);

// Bitcoin: 1096
// Decentraland: 1760
// Shiba Inu: 1463

// Axie Infinity: 1568
// Cardano: 1314
// Dogecoin: 1274
// Ethereum: 1139
// Solana: 1507