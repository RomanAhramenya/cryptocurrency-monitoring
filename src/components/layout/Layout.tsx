import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowTrendUp, faChartLine } from '@fortawesome/free-solid-svg-icons'
import style from './Layout.module.scss'
const Layout: FC = () => {
    return (
        <div className={style.container}>
            <header>
                RomanAhramenya@gmail.com | the project is under development
            </header>
            <nav>
                <CustomLink to='/'>
                    <div> <FontAwesomeIcon icon={faHouse} style={style.icon}/><span>Home</span></div>

                </CustomLink>

                <CustomLink to='/prices'>
                    <div><FontAwesomeIcon icon={faArrowTrendUp} style={style.icon}/><span>Prices</span></div>
                </CustomLink>

                <CustomLink to='/charts'>

                    <div><FontAwesomeIcon icon={faChartLine} style={style.icon}/><span>Charts</span></div>
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
