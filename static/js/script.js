// O array de criptoativos armazena as informações estáticas de cada moeda para os cálculos necessários.
const cryptoactives = [
    axieInfinity = [
        acessNumber = 1568,
        amountPurchased = 0.01998,
        purchasePrice = 783.00,
        spentPurchase = 15.66,
    ],

    bitcoin = [
        acessNumber = 1096,
        amountPurchased = 0.00003995,
        purchasePrice = 323615,
        spentPurchase = 13.00,
    ],

    cardano = [
        acessNumber = 1314,
        amountPurchased = 1.1988,
        purchasePrice = 8.925,
        spentPurchase = 10.71,
    ],

    decentraland = [
        acessNumber = 1760,
        amountPurchased = 0.3996,
        purchasePrice = 26.54,
        spentPurchase = 10.616,
    ],

    dogedoin = [
        acessNumber = 1274,
        amountPurchased = 9.974,
        purchasePrice = 1.227,
        spentPurchase = 11.043,
    ],

    ethereum = [
        acessNumber = 1139,
        amountPurchased = 0.0003996,
        purchasePrice = 23346,
        spentPurchase = 10.53,
    ],

    shibaInu = [
        acessNumber = 1463,
        amountPurchased = 36781,
        purchasePrice = 0.00022,
        spentPurchase = 10.10,
    ],

    solana = [
        acessNumber = 1507,
        amountPurchased = 0.00999,
        purchasePrice = 1203.9,
        spentPurchase = 12.039,
    ],
]

// Elementos puxados do HTML para mostrarem os resultados na tela.
const cryptoInfos = document.getElementsByClassName("crypto-infos");
const currentProfitsArea = document.getElementsByClassName("current-profits-area");
const purchasePriceArea = document.getElementsByClassName("purchase-price-area");
const spentPurchaseArea = document.getElementsByClassName("spent-purchase-area");
const currentPriceArea = document.getElementsByClassName("current-price-area");
const amountPurchasedArea = document.getElementsByClassName("amount-purchased-area");
const pricePercentageArea = document.getElementsByClassName("price-percentage-area");
const profitPercentageArea = document.getElementsByClassName("profit-percentage-area");

const binanceAPI = "https://api.binance.com/api/v3/ticker/price";

setInterval(() => {
    fetch(binanceAPI)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < cryptoInfos.length; i++) {
                const functionArgs = {
                    acess: cryptoactives[i][0],
                    amountPurch: cryptoactives[i][1],
                    arg: data,
                    index: i,
                    purchPrice: cryptoactives[i][2],
                    spentPurch: cryptoactives[i][3],
                }

                const currentProfit = calcCurrentProfit(functionArgs);
                getPurchasePrice(functionArgs.index);
                getSpentPurchase(functionArgs.index);
                returnCurrentPrice(functionArgs);
                returnAmountPurchased(functionArgs.amountPurch, functionArgs.index);
                calcPricePercentage(functionArgs);
                calcProfitPercentage(currentProfit, functionArgs);
            }
        });
}, 500);

// let totalProfit = 0;
// let totalExpense = 0;

// function calcTotalExpense() {
//     x = Number(a.textContent) + Number(b.textContent);
//     totalProfitArea.textContent = x.toFixed(2);
// }

// function calcTotalProfit() {

// }

// Calcula o lucro atual da criptomoeda.
function calcCurrentProfit({ acess, amountPurch, arg, index, spentPurch }) {
    let result = (arg[acess].price * amountPurch) - spentPurch;
    currentProfitsArea[index].textContent = result.toFixed(2);
    return result;
}

// Pega o preço de compra.
function getPurchasePrice(index) {
    let result = cryptoactives[index][2];
    purchasePriceArea[index].textContent = result;
}

// Pega o gasto na compra.
function getSpentPurchase(index) {
    let result = cryptoactives[index][3];
    spentPurchaseArea[index].textContent = result.toFixed(2);
}

// Retorna o preço atual.
function returnCurrentPrice({ arg, acess, index }) {
    let result = arg[acess].price;
    currentPriceArea[index].textContent = Number(result).toFixed(2);
}

// Retorna a quantia de moedas compradas.
function returnAmountPurchased(amountPurch, index) {
    let result = amountPurch;
    amountPurchasedArea[index].textContent = result;
}

// Calcula a porcentagem do preço de compra com o preço atual.
function calcPricePercentage({ arg, acess, index, purchPrice }) {
    let result = ((arg[acess].price - purchPrice) / purchPrice) * 100;
    pricePercentageArea[index].textContent = result.toFixed(2) + "%";
}

// Calcula a porcentagem do preço gasto em relação ao lucro atual.
function calcProfitPercentage(currentProfit, { index, spentPurch }) {
    let result = (currentProfit / spentPurch) * 100;
    profitPercentageArea[index].textContent = result.toFixed(2) + "%";
}