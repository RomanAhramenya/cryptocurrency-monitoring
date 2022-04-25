import React, { FC } from 'react'
import style from './Select.module.scss'
import { NavLink } from 'react-router-dom'
const eth = require('../../../image/eth.png');
const tron = require('../../../image/tron.png');
const btc = require('../../../image/btc.png');
interface ISelect {
    isSelect:boolean
    setIsSelect:(select:boolean)=>void
  }
const Select:FC<ISelect> = ({isSelect,setIsSelect}) => {
   
  return (
    <div className={style.header_group_left__select}>
        <div className={style.header_group_left__select_header} onClick={()=>setIsSelect(!isSelect)}>
            Crypto Prices {isSelect ?<span>&#9650;</span> :<span>&#9660;</span>} 
        </div>
        {isSelect && <div className={style.pop}>
           <NavLink to={`/prices/bitcoin`}> <img src={btc}/> <span>Bitcoin</span></NavLink>
           <NavLink to={`/prices/ethereum`}> <img src={eth}/> <span>Ethereum</span></NavLink>
           <NavLink to={`/prices/tron`}><img src={tron}/> <span>Tron</span> </NavLink>
           <NavLink to='/prices'>Other prices...</NavLink>
            </div>}
    </div>
  )
}

export default Select
