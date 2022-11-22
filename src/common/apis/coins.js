export const getAllCoins = (currency = "inr") => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

    const getCoins = fetch(url)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(err => {
            console.log(err.message);
            return err.message;
        });

    return getCoins;
};

export const getCoinDetail = id => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    const coinDetail = fetch(url)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(err => {
            console.log(err.message);
            return err.message;
        });

    return coinDetail;
};
