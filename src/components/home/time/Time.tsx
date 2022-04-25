import React, { FC, useEffect, useState } from 'react'

const Time:FC = () => {
    const [date, setDate] = useState('')
    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date().toLocaleString())
      }, 1000)
      return () => clearInterval(interval)
  
    }, [])
  return (
    <h5>{date}</h5>
  )
}

export default Time