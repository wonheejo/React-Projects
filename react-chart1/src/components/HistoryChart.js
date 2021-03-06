import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { historyOptions } from '../chartConfigs/chartConfigs';
import 'chartjs-adapter-date-fns';


const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, month, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState('24h');
  const [buildingCanvas, setBuildingCanvas] = useState('false');


  const determineTimeFormat = () => {
    switch(timeFormat) {
      case '24h':
        return day;
      case '7d':
        return week;
      case '30d':
        return month;
      case '1y':
        return year;
      default:
        return day;
    }
  };
  //remove canvas whenever the timeFormat changes
  useEffect(() => {
    setBuildingCanvas(true);
  }, [timeFormat]);

  //if buildingCanvas was set true for the last render, then it means that the canvas element was removed from the dom. It must be set to 'false' to immediately re-create a canvas
  useEffect(() => {
    if(buildingCanvas){
      setBuildingCanvas(false);
    }
  }, [buildingCanvas]);

  console.log(determineTimeFormat())

  useEffect(() => {
    const chartCanvas = chartRef.current
    if(buildingCanvas || !chartCanvas){
      return;
    }
    if(chartRef && chartRef.current && detail){
      console.log('Initialized')
      const chartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [{
            label: `${detail.name} Prices`,
            data: determineTimeFormat(),
            backgroundColor: 'rgba(174, 305, 194, 0.5)',
            borderColor: 'rgb(54, 162, 23)',
            fill: true,
            borderWidth: 1,
            pointRadius: 0,
          }],
        },
          options: {
            ...historyOptions,
          },
      });
      return () => {
        chartInstance.destroy();
      }
    }
  })

const renderPrice = () => {
  if (detail) {
    return (
      <>
        <p className='my-0'>${detail.current_price.toFixed(2)}</p>
        <p className={
              detail.price_change_24h < 0 
              ? 'text-danger my-0' 
              : 'text-success my-0'
            }>
              {detail.price_change_percentage_24h.toFixed(2)}%
        </p>
      </>
    )
    }
  }

  const BackButton = () => {
    let history = useHistory();
    return (
      <>
        <button 
          onClick={ () => history.goBack()}
          className='btn btn-outline-secondary btm-sm'>Back</button>
      </>
    )
  }

  return (
    <div className='bg-white border mt-2 rounded p-3'>
      <div>{renderPrice()}</div>
      <div>
        {BackButton()}
      </div>

      <div>
        <canvas ref={chartRef} id='mychart' width={250} height={250}></canvas>
      </div>

      <div className='chart-button mt-1'>
        <button 
          onClick={() => setTimeFormat('24h')}
          className='btn btn-outline-secondary btn-sm'>24h</button>
        <button 
          onClick={() => setTimeFormat('7d')}
          className='btn btn-outline-secondary btn-sm mx-1'>7d</button>
        <button 
          onClick={() => setTimeFormat('30d')}
          className='btn btn-outline-secondary btn-sm mx-1'>30d</button>
        <button 
          onClick={() => setTimeFormat('1y')}
          className='btn btn-outline-secondary btn-sm'>1y</button>
      </div>
    </div>
  )
}

export default HistoryChart;
