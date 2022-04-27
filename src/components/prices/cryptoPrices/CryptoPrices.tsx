import React, { FC } from 'react'
import style from '../Prices.module.scss'
import { useParams } from 'react-router-dom'
import Select from '../../home/select/Select';
import { round } from '../../function/numberRound';
import Grafic from '../../common/grafic/Grafic';
import GetCrypro from '../GetCrypro';

interface ICruptoPrices {
  isSelect: boolean
  setIsSelect: (select: boolean) => void
}

const CryptoPrices: FC<ICruptoPrices> = (props) => {
  const { isSelect, setIsSelect } = props
  const { id } = useParams<{ id?: string }>() as { id: string }

  
  return (
    <div className={style.cryptoPrices_wraper}>
      
      <div className={style.cryptoPrices_left}>
        <div className={style.header}>
          <Select isSelect={isSelect} setIsSelect={setIsSelect} />
        </div>
        <h1>{id.toUpperCase()}  </h1>
        <Grafic id={id} />
      </div>
      <GetCrypro id={id}/>
      

    </div>
  )
}

export default CryptoPrices
