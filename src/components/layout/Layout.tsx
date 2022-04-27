import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowTrendUp, faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import style from './Layout.module.scss'
const Layout: FC = () => {
    return (
        <div className={style.container}>
            <header>
                RomanAhramenya@gmail.com | the project is under development
            </header>
            <nav>
                <CustomLink to='/'>
                    <div className={style.item}>
                         <div><FontAwesomeIcon icon={faHouse}/></div> 
                         <div>Home</div>
                         </div>
                </CustomLink>
                <CustomLink to='/prices'>
                    <div className={style.item}>
                        <div><FontAwesomeIcon icon={faArrowTrendUp}/></div>
                        <div>Prices</div>
                        </div>
                </CustomLink>
                <CustomLink to='/charts'>
                    <div className={style.item}>
                        <div>
                            <FontAwesomeIcon icon={faCodeCompare}/>
                            </div>
                            <div>Exchange</div>
                            </div>
                </CustomLink>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout
