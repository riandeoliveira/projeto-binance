const criptoactives = {
    mine: {
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
    },

    her: {
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
}

const binanceAPI = "https://api.binance.com/api/v3/ticker/price";

setInterval(() => {
    fetch(binanceAPI)
        .then(response => response.json())
        .then(data => {
            teste.textContent = (data[1463].price * 36781) - 10.10;
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



// 01/12/2021
// Exibir quanto estou ganhando em todas as criptos!!!