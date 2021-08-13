import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/WatchListContext';
import Coin from './Coin';

const CoinList = () => {
  const[coins, setCoins] = useState([]);
  const{watchList, deleteCoin} = useContext(WatchListContext);
  const[isLoading, setIsLoading] = useState(false);

  console.log(watchList)
  // Below is used to call on the api for receiving the data for the coins
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCoins(response.data)
      setIsLoading(false)
    }
    if (watchList.length > 0){
      fetchData()
    } else {
      setCoins([])
    }

  }, [watchList]) 
  // At first Pass in an empty dependency array, so it fetches the data only once,
  // But now after adding the deletecoin function, we need to update the dependency array so that the newly updated watchList gets added to the dependency and the actual coins array gets updated after the watchList gets updated.
  
  const renderCoins = () => {
    if(isLoading){
      return(
        <div>Loading....</div>
      )
    }
    return (
      <ul className='coinlist list-group mt-2'>
         {coins.map(coin => {
           return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>
         })}
      </ul>
    )
  }

  return (
    <div>
      {renderCoins()}
    </div>
  );
};

export default CoinList
