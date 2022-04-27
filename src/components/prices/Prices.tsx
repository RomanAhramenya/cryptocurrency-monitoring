import React, { FC, useEffect } from 'react'
import style from './Prices.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {  fetchAssetsAll } from '../../store/reducers/CryptoAssetsAction'
import PricesCommon from './PricesCommon'

const Prices:FC= () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(state => state.crypto.error)
  useEffect(()=>{
    dispatch(fetchAssetsAll())
  },[])
  
 console.log('price')
  return (
    <div className={style.wraper}>
      <h2>Prices</h2>
      <div className={style.wraper_compare}>
        <PricesCommon getValueGrafic='bitcoin' />
        <PricesCommon getValueGrafic='ethereum' />
      </div>
      {error && <div className={style.error}>{error}</div>}
    </div>
  )
}

export default Prices