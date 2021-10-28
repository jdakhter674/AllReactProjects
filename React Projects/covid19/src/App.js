import React, { useEffect, useState } from 'react'
import './App.css'
import Cards from './component/card/Cards'
import Charts from './component/charts/Charts'
import Country from './component/countryPicker/Country';

import {fetchData} from './api/axios'




const App = () => {
 
    const [data,setData]=useState()
    const [confirmed,setConfirmed]=useState()
    const [recovered,setRecovered]=useState()
    const [deaths,setDeaths]=useState()
    const [lastUpdate,setLastUpdate]=useState("")
    const [country,setCountry]=useState('')



    const [confirmedData,setConfirmedData]=useState()
    const [recoveredData,setRecoveredData]=useState()
    const [deathsData,setDeathsData]=useState()
    const [lastUpdateData,setLastUpdateData]=useState("")
    const [countryData,setCountryData]=useState('')

useEffect(async()=>{
    const data= await fetchData()
    setData(data)


    setConfirmed(data.confirmed.value)
    setRecovered(data.recovered.value)
    setDeaths(data.deaths.value)
    setLastUpdate(data.lastUpdate)
    // console.log(data.lastUpdate)

},[])




const handleCountryChange=async(country)=>{

    const handleData= await fetchData(country)
    console.log(handleData)
    setData(handleData)
    setCountry(country)
    setConfirmedData(handleData.confirmed.value)
    setRecoveredData(handleData.recovered.value)
    setDeathsData(handleData.deaths.value)
    setLastUpdateData(handleData.lastUpdate)


}






    return (
        <div className="container">
          <h1 className="covid">C <span className="ovid">OVID</span>  19</h1>



         <Cards
          confirmed={confirmed}
        lastUpdate={lastUpdate}
        recovered={recovered}
        deaths={deaths}
        />
         <Country 
         
         handleCountryChange={handleCountryChange}
         />

         <Charts
         data={data}
         country={country}
          confirmedData={confirmedData}
          lastUpdateData={lastUpdateData}
          recoveredData={recoveredData}
          deathsData={deathsData}
         
         
         />
            
        </div>
    )
}

export default App

