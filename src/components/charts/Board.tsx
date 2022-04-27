import React, { FC, useEffect, useState } from 'react'

import style from './Exchange.module.scss'

interface IProps {
 change1:{
   name:string
   price:string
 }
 change2:{
  name:string
  price:string
}
}
const Board: FC<IProps> = ({ change1,change2}) => {
  const [value1,setValue1] = useState(0)
  const [value2,setValue2] = useState(0)
 
  
  const changeHandler1: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue1(Number(e.currentTarget.value));
      
  }

  useEffect(()=>{
    setValue2((value1*Number(change1.price.replace(/[\s,%]/g, '')) )/Number(change2.price.replace(/[\s,%]/g, '')))
  },[value1,value2])
  return (
    <div className={style.board}>
      <div className={style.board_header} >
        <div className={style.board_header__wraper}>
          {change1.name ? change1.name : "currency №1"}
          <div>{change1.price} $</div>
          <div className={style.input}><input type='number' placeholder={change1.name} value={value1} onChange={(e)=>changeHandler1(e)}/></div>
        </div>
        <div className={style.board_header__wraper}>
          {change2.name ? change2.name : 'currency №2'}
          <div>{change2.price} $</div>
          <div className={style.input}><span className={style.input_span}>{value2}</span></div>
          </div>
      </div>
     
    </div>
  )
}

export default Board