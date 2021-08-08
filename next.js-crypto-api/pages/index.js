import Head from 'next/head'
import Image from 'next/image'
import Coinlist from '../components/Coinlist'
import Coins from '../components/Coins/Index'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layout'
import {useState} from 'react';

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('')
  
  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = e =>{
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className='coin_app'>
        <SearchBar 
          type='text' 
          placeholder='Search'
          onChange={handleChange}
          />
        <Coinlist filteredCoins={allCoins}/>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2030d%2C%20200d%2C%201y')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}