import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count,setCount]=useState(5)
    const history = useHistory()

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((currentCount)=> --currentCount)
        }, 1000);

        count === 0 && history.push('/login')
      return ()=>clearInterval(interval)

    },[history,count])
    return (
        <div>
            <p>Loading To Redirect into {count} second</p>
            
        </div>
    )
}

export default LoadingToRedirect
