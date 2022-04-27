import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchCrypto } from '../../store/reducers/CryptoAction'
import { round } from '../function/numberRound'
import style from './Prices.module.scss'
interface IGetCrypto {
  id: string
}
const GetCrypro: FC<IGetCrypto> = ({ id }) => {

  const data = useAppSelector(state => state.crypto)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCrypto({ id: id, name: id }))
  }, [id])

  return (
    <div className={style.cryptoPrices_right}>
      {
        data.crypto[id] && <>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            
              <h2 style={{marginRight:'1rem'}}>{data.crypto[id].name}</h2>
              <h2 style={{ color: 'green' }} > {round(data.crypto[id].priceUsd)}$</h2>
            
          </div>
          <div><span>id</span><span>{data.crypto[id].id}</span></div>
          <div><span>rank</span><span>{data.crypto[id].rank}</span></div>
          <div><span>symbol</span><span>{data.crypto[id].symbol}</span></div>
          <div><span>name</span><span>{data.crypto[id].name}</span></div>
          <div><span>supply</span><span>{round(data.crypto[id].supply)}</span></div>
          <div><span>maxSupply</span><span>{round(data.crypto[id].maxSupply)}</span></div>
          <div><span>volumeUsd24Hr</span><span>{round(data.crypto[id].volumeUsd24Hr)}</span></div>
          <div><span>priceUsd</span><span>{round(data.crypto[id].priceUsd)}</span></div>
          <div><span>changePercent24Hr</span><span>{round(data.crypto[id].changePercent24Hr)}%</span></div>
          <div><span>vwap24Hr</span><span>{round(data.crypto[id].vwap24Hr)}</span></div>
        </>


      }
    </div>

  )
}

export default GetCrypro