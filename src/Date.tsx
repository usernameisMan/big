import React,{useEffect, useState} from 'react';
import dayjs from 'dayjs'

export default () => {
  const [time,setTime] = useState(dayjs())

  useEffect(()=> {
    
   const t = setInterval(()=> {
    setTime(dayjs())
    },1000)
    return ()=> {
      clearInterval(t)
    }
  },[])

  return <div>
    {time.format('YYYY.MM.DD hh:mm:ss')}
  </div>
}