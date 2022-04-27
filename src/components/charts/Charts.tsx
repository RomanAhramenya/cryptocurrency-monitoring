import React, { useEffect, useState } from 'react'
import style from './Exchange.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchAssets } from '../../store/reducers/CryptoAssetsAction'
import ExchengeMap from './ExchengeMap'
import Board from './Board'


function Charts() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state=>state.assets.assets)
  const [change1,setChange1] = useState({
    name:'',
    price:''
  });
  const [change2,setChange2] = useState({
    name:'',
    price:''
  });
 
 
  useEffect(()=>{
    dispatch(fetchAssets({limit:'20',offset:'0'}))
  },[])
  
  return (
  <>
   <h1>Exchange</h1>
    <div className={style.wraper}>
      <ExchengeMap setChange={setChange1} name={change1.name}  arr={state} classN='left' />
      <Board change1={change1} change2={change2}/>
      <ExchengeMap setChange={setChange2}  name={change2.name}  arr={state} classN='right' />
    </div>
  </>
   
  )
}

export default Charts