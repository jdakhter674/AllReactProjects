import React , {useEffect,useState} from 'react';
import './countryPicker.css'
import {NativeSelect , FormControl} from '@material-ui/core'
import { countries } from '../../api/axios';

const Country = ({handleCountryChange}) => {

const [Allcountries,setAllCountries]=useState([])


useEffect(()=>{
    const countryData= async ()=>{

        const countryPicker= await countries();
        setAllCountries(countryPicker)
    }
    countryData()
},[setAllCountries])

// console.log(Allcountries)


    return (
       <FormControl className="formControl">
           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="global">Global</option>
               {
                   Allcountries.map((country,i)=><option value={country} key={i}>{country}</option>)
               }

           </NativeSelect>

       </FormControl>
    )
}

export default Country
