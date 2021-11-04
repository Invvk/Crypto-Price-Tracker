import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Info from './Info';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => {
      setCoins(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <div className="search">
        <h1 className="text">Select a currency</h1>
        <form>
          <input type ="text" placeholder="search" className="input" onChange={handleChange}/>
        </form>
        
      </div>
      <div className="container">
        <p className="row">
          <Info />
        </p>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          /> 
        )
      })}
      <div className='footer'>
        <p>Invvk @ Github</p>
      </div>
    </div>
  );
}

export default App;
