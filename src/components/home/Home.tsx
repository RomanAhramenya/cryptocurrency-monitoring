import React, { FC, useEffect, useState } from 'react'
import { ICryptoAssets } from '../../models/ICryptoAssets'
import Loader from '../loader/Loader'
import AssetsCrypto from './assetsCrypto/AssetsCrypto'
import style from './Home.module.scss'
import Paginator from './paginator/Paginator'
import Select from './select/Select'
import Time from './time/Time'
interface IHome {
  data: ICryptoAssets[]
  isSelect:boolean
  setIsSelect:(select:boolean)=>void
  isLoading:boolean
}
const Home: FC<IHome> = (props) => {
  const { data,isSelect,setIsSelect,isLoading } = props
 console.log(isLoading)
  return (
    <div>
      <div className={style.header}>
        <div className={style.header_group_left}>
          <div className={style.header_group_left__h}>Home</div>
        <Select isSelect={isSelect} setIsSelect={setIsSelect}  />
        </div>
        <Time/>
        
        </div>
       

      <div className={style.table}>
        <div className={`${style.table_rows} ${style.table_header}`} >
          <div>#</div>
          <div>Name</div>
          <div>Price</div>
          <div>MarketCap</div>
          <div>Change24H</div>
        </div> 

        {isLoading ? <div className={style.loader}><Loader/></div> : data.map(el => {
          return <AssetsCrypto key={el.rank} id={el.id} rank={el.rank} name={el.name} marketCapUsd={el.marketCapUsd} priceUsd={el.priceUsd} changePercent24Hr={el.changePercent24Hr} />
        })}
        <Paginator />
      </div>

    </div>
  )
}

export default Home