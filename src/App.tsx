import React, { useState } from 'react';
import { useEffect } from 'react';

import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchAssets } from './store/reducers/CryptoAssetsAction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Prices from './components/prices/Prices';
import Charts from './components/charts/Charts';
import CryptoPrices from './components/prices/cryptoPrices/CryptoPrices';




function App() {
 const data = useAppSelector(state=>state.assets)
 const [isSelect,setIsSelect] = useState(false)
  return (
    <BrowserRouter>
    <div className="App" onClick={()=>isSelect? setIsSelect(false):''}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home isSelect={isSelect} setIsSelect={setIsSelect} data={data.assets} isLoading={data.isLoading}/>}/>
          <Route path='prices' element={<Prices/>}/>
          <Route path='prices/:id' element={<CryptoPrices isSelect={isSelect} setIsSelect={setIsSelect}/>}/>
          <Route path='charts' element={<Charts/>}/>
        </Route>
      </Routes>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
