import React, { FC, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Grafic from '../common/grafic/Grafic'
import GetCrypro from './GetCrypro'
import style from './Prices.module.scss'
interface IPricesCommon {
   getValueGrafic:string
  }
const PricesCommon:FC<IPricesCommon> = ({getValueGrafic}) => {
  
    const [value,setValue] = useState('');
    const [isFocus,setIsFocus] = useState(false)
    const [valueGrafic,setValueGrafic] = useState(getValueGrafic)
    const state = useAppSelector(state => state.assets.assetsAll)
    
    
    const ChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setIsFocus(true)
        setValue(e.currentTarget.value)
      } 
      const clickHandler  = (val:string) => {
        setIsFocus(false)
        setValueGrafic(val)
        setValue(val)
      }
      const keyHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        console.log(e)
        if (e.code === 'Enter'){
          setValueGrafic(value)
        }
      }
      const clickHandlerWraper = () => {
        setIsFocus(false)
      }
      
    function insertMark (string:string,pos:number,len:number) {
        return <div>{string.slice(0,pos)}<mark>{string.slice(pos,pos+len)}</mark>{string.slice(pos + len) }</div> 
      }
    return (
   
         <div onClick={()=>clickHandlerWraper()} className={style.compare}>  
         <div className={style.inputWraper}>
           <input onKeyDown={keyHandler} value={value} onChange={ChangeHandler }/>
        
         </div>
        
        <div className={isFocus ? style.pop : style.popNone}>
            {value  && state.map(el=>{
          if(el.search(value) == -1) {
            return  <div className={style.searchHint_none}>{el}</div>
          } else {
            
            return <div onClick={()=>clickHandler(el)} className={style.searchHint_block}>{insertMark(el,el.search(value),value.length)}</div>
          }
        }) }
        </div>
        <div className={style.cryptoPrices_wraper + ' ' + style.cryptoPrices_margin}>
          <GetCrypro id={valueGrafic}/>
        </div>
        <div className={style.grafic}>
          <Grafic id={valueGrafic}/>
        </div>
       
        
       
      </div>
    
  )
}

export default PricesCommon