import React, { FC, useEffect } from 'react'
import style from '../Prices.module.scss'
import { useParams } from 'react-router-dom'
import { ICryptoAssets } from '../../../models/ICryptoAssets'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchHistory } from '../../../store/reducers/HistoryActions';
import { fetchCrypto } from '../../../store/reducers/CryptoAction';
import Select from '../../home/select/Select';
import { round } from '../../function/numberRound';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



interface ICruptoPrices {
  isSelect:boolean
  setIsSelect:(select:boolean)=>void
}

const CryptoPrices:FC<ICruptoPrices> = (props) => {
  const{isSelect,setIsSelect} = props
  const {id} = useParams<{id?:string}>() as {id:string}
  const state = useAppSelector(state=>state.history)
  const data = useAppSelector(state=>state.crypto)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchHistory(id))
    dispatch(fetchCrypto(id))
  },[id])
  const labels:string[] = []


  state.history.map(el=>{
    labels.push(el.date.slice(0,7))
  })
  
  const dataPrice:number[]= []
  state.history.map(el=>{
    dataPrice.push(Number(el.priceUsd))
  })
  const dataCharts = {
    labels:labels,
    datasets: [ {
      label: 'PRICE',
      data: dataPrice,
      borderColor: 'green',
      backgroundColor: 'green',
    },
  ]
  }
  const options = {
    responsive: true,
    plugins: {
      tooltip:{
        intersect:false
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        
      },
    },
    elements:{
      point:{
        radius:1,
        pointStyle:'line'
      },
      line:{
        borderWidth:1
      }
    }
  };
  return (
    <div className={style.cryptoPrices_wraper}>
      <div className={style.cryptoPrices_left}>
         <div className={style.header}>
        <Select isSelect={isSelect} setIsSelect={setIsSelect}/> 
      </div>
    
    <h1>{id.toUpperCase()} <span className={style.symbol}>{data.crypto.symbol}</span><span className={style.price}>USD {round(data.crypto.priceUsd)}</span> </h1>
    
    {state.isLoading?<div>loading</div>: <div className={style.grafic}><Line data={dataCharts} options={options}/></div> }
      </div>
     <div className={style.cryptoPrices_right}>
     <div>{new Date().toLocaleString()}</div>
      <div><span>id</span><span>{data.crypto.id}</span></div>
      <div><span>rank</span><span>{data.crypto.id}</span></div>
      <div><span>symbol</span><span>{data.crypto.symbol}</span></div>
      <div><span>name</span><span>{data.crypto.name}</span></div>
      <div><span>supply</span><span>{round(data.crypto.supply)}</span></div>
      <div><span>maxSupply</span><span>{round(data.crypto.maxSupply)}</span></div>
      <div><span>volumeUsd24Hr</span><span>{round(data.crypto.volumeUsd24Hr)}</span></div>
      <div><span>priceUsd</span><span>{round(data.crypto.priceUsd)}</span></div>
      <div><span>changePercent24Hr</span><span>{round(data.crypto.changePercent24Hr)}</span></div>
      <div><span>vwap24Hr</span><span>{round(data.crypto.vwap24Hr)}</span></div>

     </div>
  
    </div>
  )
}

export default CryptoPrices
