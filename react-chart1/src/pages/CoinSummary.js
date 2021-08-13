import React from 'react'
import AddCoin from '../components/AddCoin'
import CoinList from '../components/CoinList'

export const CoinSummary = () => {
  return (
    <div className='coinsummary shadow border p-2 rounded mt-2 bg-light'>
      <AddCoin />
      <CoinList />
    </div>
  )
}

