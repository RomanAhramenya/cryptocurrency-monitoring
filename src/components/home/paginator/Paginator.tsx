import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { fetchAssets } from '../../../store/reducers/CryptoAssetsAction';
import style from './../Home.module.scss'
interface IPaginator {

}

const Paginator: FC<IPaginator> = (props) => {

    const pages = 2000;
    const arrayPages: number[] = [];
    for (let i = 1; i <= pages; i++) {
        arrayPages.push(i)
    }
    
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [arrButton, setArrButton] = useState<number[]>([])
    
    useEffect(() => {
        let tempNumberOfPages = [...arrayPages]
        if(currentPage <= 5 ){
            tempNumberOfPages = arrayPages.slice(0,5)
            setArrButton(tempNumberOfPages)
        }
        if(currentPage % 5 === 0 ){
            tempNumberOfPages =[1,...arrayPages.slice(currentPage-1,currentPage+5)] 
            setArrButton(tempNumberOfPages)
        }
       
           dispatch(fetchAssets( String((currentPage-1)*5) ))
       
        
    }, [currentPage])
    return (
        <div className={style.paginator} >
            <span className={style.pageButton} onClick={() => setCurrentPage((prev) => prev == 1 ? prev : prev - 1)}>Prev</span>
            {arrButton.map((page, index) => {
                return <span onClick={() => setCurrentPage(page)} className={`${style.page} ${currentPage === page && style.pageActive}`} key={index}>{page}</span>
            })}
            <span onClick={() => setCurrentPage((prev) => prev == arrayPages.length ? prev : prev + 1)} className={style.pageButton}>Next</span>
        </div>

    )
}

export default Paginator