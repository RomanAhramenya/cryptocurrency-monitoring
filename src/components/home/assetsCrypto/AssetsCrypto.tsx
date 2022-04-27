import React, { FC } from 'react'
import style from './../Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { round } from '../../function/numberRound';
interface IAssetsCryptoProps {
    rank: string
    name: string
    marketCapUsd: string
    priceUsd: string
    changePercent24Hr: string
    id:string
}
const AssetsCrypto: FC<IAssetsCryptoProps> = (props) => {
    const { rank, name, marketCapUsd, priceUsd, changePercent24Hr,id } = props
    return (
        
            <NavLink className={style.table_rows} to={`/prices/${id}`}>
                <div>{rank}</div>
                <div>{name}</div>
                <div>{round(priceUsd)} $</div>
                <div>{round(marketCapUsd)} $</div>
                <div>{Number(round(changePercent24Hr)) < 0 ?
                    <span className={style.arrowDown}> {Number(round(changePercent24Hr))} <FontAwesomeIcon icon={faArrowDown} style={style.icon} />%</span> :
                    <span className={style.arrowUp}> {Number(round(changePercent24Hr))} <FontAwesomeIcon icon={faArrowUp} style={style.icon} />%</span>} </div>
            </NavLink>

      
    )
}

export default AssetsCrypto