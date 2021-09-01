import React, { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log(localStorage.getItem('watchList').split(','));

  //Basic state of coins when the web app is initiated?
  // However, with the logical 'or' ||, it always returns the first object if the first object has a value else, it returns the second value.
  const[watchList, setWatchList] = useState( 
    localStorage.getItem('watchList').split(',') 
    || [
    'bitcoin', 
    'ethereum', 
    'ripple', 
  ]);

  // uses useEffect to store watchlist on localstorage
  // which is in the dependency array.
  useEffect(() => {
    localStorage.setItem('watchList', watchList)
  }, [watchList])

  // Adds a new coin to the watchlist. 
  // the if statement checks if the new coin is already in the list or not. 
  const addCoin = coin => {
    if(watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin])
    }
  }

  //Deletion of coins when the delete icon is clicked on
  const deleteCoin = (coin) => {
    setWatchList(watchList.filter(el => {
      return el !== coin
    }))
  }
  // Basically what this deletcoin does is it makes a new array of coins without the unwanted coin, in this case it would be 'coin' and so the setWatchList updates the watchList into a new array without the unwanted coin.


  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  )
}