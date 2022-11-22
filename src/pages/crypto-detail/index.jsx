import React, { useEffect, useState } from "react";
import { getCoinDetail } from "../../common/apis/coins";
import Header from "../../common/components/header";
import { useParams } from "react-router-dom";

const CryptoDetail = () => {
    const [coinData, setCoinData] = useState({});
    const { id } = useParams();

    const fetchCoinData = async () => {
        try {
            const result = await getCoinDetail(id);
            if (result) {
                console.log("reee", result);
                setCoinData(result);
            }
        } catch (err) {}
    };

    useEffect(() => {
        fetchCoinData();
    }, []);

    const {
        id: coinId = "",
        name = "",
        symbol = "",
        market_data: {
            price_change_percentage_24h: priceChange24Hrs = "",
            current_price: { inr: price = "" } = {},
        } = {},
        image: { large = "" } = {},
    } = coinData;

    return (
        <div className='detail-main'>
            <Header />

            <div className='my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 left-part'>
                            <div
                                className='coin-item mx-2 pointer'
                                key={coinId}
                            >
                                <img
                                    src={large}
                                    alt='symbol of the coin'
                                    className='coin-logo'
                                />

                                <h3 className='my-2'>{name}</h3>
                                <h5>
                                    <span className='coin-symbol'>
                                        {symbol},{" "}
                                    </span>
                                    <span
                                        className={`coin-percentage ${
                                            priceChange24Hrs > 0
                                                ? "text-green"
                                                : "text-red"
                                        }`}
                                    >
                                        {priceChange24Hrs}
                                    </span>
                                </h5>
                                <p>₹ {price}</p>
                            </div>
                        </div>
                        <div
                            className='col-md-8 right-part'
                            style={{ background: "yellow" }}
                        >
                            right
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoDetail;
