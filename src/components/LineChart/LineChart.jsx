import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = () => {

    const[data, setdata]= useState([["Date","Prices"]])
    useEffect(() => {
      let dataCopy=[["Date","Prices"]]
      if(historicalData.prices){
        historicalData.prices.map((item) => {
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setdata(dataCopy);
      }

    },[historicalData])
  return (
  <Chart
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
  />
  )
}

export default LineChart
