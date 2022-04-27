import React, { FC, useEffect } from 'react'
import style from './Grafic.module.scss'
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
import Loader from '../loader/Loader';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  interface IGrafic {
      id:string
  }
const Grafic:FC<IGrafic> = ({id}) => {
  
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.history)
    useEffect(()=>{
        dispatch(fetchHistory({id:id,name:id}))
      },[id])
    const labels:string[] = []
   
    const dataPrice:number[]= []
   
    if(state.history[id]){
      state.history[id].map(el => {
     labels.push(el.date.slice(0,7))
   })
    state.history[id].map(el => {
     dataPrice.push(Number(el.priceUsd))
   })
   }

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
  <div className={style.grafic}> {state.isLoading ? <Loader/> :<Line data={dataCharts} options={options}/>}</div>  
  )
}

export default Grafic