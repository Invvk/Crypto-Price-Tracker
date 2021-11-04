import React from 'react'
import './Coin.css'
function Coin( {name, image, symbol, price, volume, priceChange, marketcap} ) {
    return (
        <div className="container">
            <div className="containerRow">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="symbol">{symbol}</p>
                </div>
                <div className="data">
                    <p className="price">${price}</p>
                    <p className="volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="marketcap">
                        ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
