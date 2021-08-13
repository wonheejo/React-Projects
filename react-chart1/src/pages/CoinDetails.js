import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CoinData from '../components/CoinData'
import HistoryChart from '../components/HistoryChart'
import coinGecko from '../apis/coinGecko'

export const CoinDetails = () => {
  const {id} = useParams()
  const [coinData, setCoinData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const [day, week, month, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: 'usd',
              days: '30',
            }
          }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: 'usd',
              days: '365',
            }
          }),
        coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: id,
        },
        })
      ])
      
      setCoinData({
        day: day.data.prices, 
        week: week.data.prices, 
        month: month.data.prices, 
        year: year.data.prices,
        detail: detail.data[0]
      })
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const renderData = () => {
    if(isLoading){
      return(
        <div>Loading....</div>
      )
    }
    return(
      <div className='coinlist'>
        <HistoryChart />
        <CoinData />
      </div>
    )
  }
  return renderData()
}
