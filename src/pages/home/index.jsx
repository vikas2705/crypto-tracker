import React, { useEffect, useRef, useState } from "react";
import { getAllCoins } from "../../common/apis/coins";
import Header from "../../common/components/header";
import CryptoList from "./components/cypto-list";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [coinsList, setCoinsList] = useState([]);
    const [scrollPos, setScrollPos] = useState(0);
    const slider = useRef(null);

    const goToProductPage = id => {
        navigate(`/crypto-detail/${id}`);
    };

    const fetchCoins = async () => {
        const res = await getAllCoins();
        if (res && res.length) {
            setCoinsList(res);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    const goLeft = () => {
        if (scrollPos - 240 >= 0) {
            slider.current.scrollTo(scrollPos - 240, 0);
            setScrollPos(scrollPos - 240);
        } else {
            slider.current.scrollTo(0, 0);
        }
    };

    const goRight = () => {
        if (scrollPos + 240 <= slider.current.scrollWidth) {
            slider.current.scrollTo(scrollPos + 240, 0);
            setScrollPos(scrollPos + 240);
        } else {
            slider.current.scrollTo(slider.current.scrollWidth, 0);
        }
    };

    return (
        <div className='home-main'>
            <Header />

            <div className='my-4'>
                <div className='container d-flex align-items-center'>
                    <span onClick={goLeft}>
                        <i className='bi bi-caret-left-fill prevNext'></i>
                    </span>
                    <div
                        className='coins-container d-flex align-items-left'
                        ref={slider}
                    >
                        {coinsList.map(coin => {
                            const {
                                id,
                                name,
                                symbol,
                                price_change_percentage_24h: priceChange24Hrs,
                                image,
                                current_price: price,
                            } = coin;

                            return (
                                <div
                                    className='coin-item mx-2 pointer'
                                    key={id}
                                    onClick={() => {
                                        goToProductPage(id);
                                    }}
                                >
                                    <img
                                        src={image}
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
                            );
                        })}
                    </div>
                    <span onClick={goRight}>
                        <i className='bi bi-caret-right-fill prevNext'></i>
                    </span>
                </div>
            </div>

            <CryptoList
                coinsList={coinsList}
                goToProductPage={goToProductPage}
            />
        </div>
    );
};

export default Home;
