import React, { FC } from 'react'

import { ICryptoAssets } from '../../models/ICryptoAssets'
import { round } from '../function/numberRound'
import style from './Exchange.module.scss'

interface IProps {
    arr:ICryptoAssets[]
    classN:string
    name:string,
    setChange:(change:{
        name:string,
        price:string
    }) =>void
    
}
const ExchengeMap:FC<IProps> = ({arr,classN,name,setChange}) => {
  
  
    const clickHandler = (name:string,price:string) => {
        setChange({
            name:name,
            price:price
        })
    }

  return (
    <div className={style[classN]}>
        {arr.length !== 0 && arr.map(el=>{
            return <div onClick={()=>clickHandler(el.name,round(el.priceUsd))} className={name === el.name && style.disabled} key={el.rank}>
                {el.name}
            </div>
        })}
    </div>
  )
}

export default ExchengeMap