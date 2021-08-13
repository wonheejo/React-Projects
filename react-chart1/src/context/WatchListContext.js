import React, { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {

  //Basic state of coins when the web app is initiated?
  const[watchList, setWatchList] = useState([
    'bitcoin', 
    'ethereum', 
    'ripple', 
    'litecoin'
  ]);

  //Deletion of coins when the delete icon is clicked on
  const deleteCoin = (coin) => {
    setWatchList(watchList.filter(el => {
      return el !== coin
    }))
  }
  // Basically what this deletcoin does is it makes a new array of coins without the unwanted coin, in this case it would be 'coin' and so the setWatchList updates the watchList into a new array without the unwanted coin.


  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  )
}