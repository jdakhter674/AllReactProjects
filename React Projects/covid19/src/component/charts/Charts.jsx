import React, { useEffect, useState } from 'react'
import './Charts.css';
import { fetchDailyData } from '../../api/axios'
import { Line, Bar } from 'react-chartjs-2'

const Charts = ({data,country,confirmedData,recoveredData,deathsData}) => {
    const [dailyData, setDailyData] = useState([])


    useEffect(() => {
        const fetchApi = async () => {
            const fetchData = await fetchDailyData()
            setDailyData(fetchData)

        }
        fetchApi()
    },[])

    const lineChart = (
        dailyData.length
        ?(
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: "#3333ff",
                        fill: true,


                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: "red",
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,

                    }],
                }}




            />

)

            : null
    )




// console.log(confirmed,recovered,deaths)

console.log(confirmedData,recoveredData,deathsData)
const barCharts=(
    confirmedData ?
    (
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'people',
                backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'
                ],
                data:[confirmedData,recoveredData,deathsData]

            


            }]

        }}
        options={{
            legend:{display:false},
            title:{display:true , text:`Current state in ${country}`},
           

        }}
        
        
        />
    ):null
)
















    return (
        <div className="container">
{country ?barCharts :lineChart}
        </div>
    )
}

export default Charts
