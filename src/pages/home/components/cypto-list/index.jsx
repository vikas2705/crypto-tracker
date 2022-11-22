import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./crypto-list.css";

const CryptoList = props => {
    const { coinsList = [], goToProductPage } = props;
    const [cryptoList, setCryptoList] = useState(coinsList);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setCryptoList(coinsList);
    }, [coinsList]);

    const handleNameChange = e => {
        setSearchTerm(e.target.value);
    };

    const handleSearchCrypto = e => {
        e.preventDefault();

        if (!searchTerm) {
            setCryptoList(coinsList);
        } else {
            const filteredItems = cryptoList.filter(item => {
                return item.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setCryptoList(filteredItems);
            // filter out the crypto based on the name
        }
    };

    return (
        <div className='crypto-list'>
            <div className='container'>
                <div className='search-bar'>
                    <form onSubmit={handleSearchCrypto}>
                        <Form.Control
                            type='text'
                            id='cryptoName'
                            aria-describedby='cryptoName'
                            placeholder='Search your cryptocurrency here...'
                            onChange={handleNameChange}
                            value={searchTerm}
                        />
                    </form>
                </div>

                <div className='crypto-table my-4 p-3'>
                    <div className='row table-header p-3'>
                        <h3 className='col-md-5 table-heading'>Coin</h3>
                        <h3 className='col-md-2 table-heading'>Price</h3>
                        <h3 className='col-md-3 table-heading'>24hChange</h3>
                        <h3 className='col-md-2 table-heading'>Market Cap</h3>
                    </div>

                    {cryptoList.map(coin => {
                        const {
                            id,
                            name,
                            price_change_percentage_24h: priceChange24Hrs,
                            image,
                            market_cap: marketCap,
                            current_price: price,
                        } = coin;

                        return (
                            <div
                                className='row table-data-row p-3 d-flex align-items-center'
                                key={id}
                            >
                                <div
                                    className='col-md-5 table-data pointer'
                                    onClick={() => {
                                        goToProductPage(id);
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt='symbol of the coin'
                                        className='coin-logo-small'
                                    />
                                    <h3>{name}</h3>
                                </div>
                                <div className='col-md-2 table-data'>
                                    {price}
                                </div>
                                <div className='col-md-3 table-data'>
                                    <span
                                        className={`coin-percentage ${
                                            priceChange24Hrs > 0
                                                ? "text-green"
                                                : "text-red"
                                        }`}
                                    >
                                        {priceChange24Hrs}
                                    </span>
                                </div>
                                <div className='col-md-2 table-data'>
                                    {marketCap}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CryptoList;
