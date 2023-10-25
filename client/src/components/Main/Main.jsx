import './Main.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Title from '../Title/Title';
import Home from '../../pages/Home/Home';
import New from '../../pages/New/New';
import Index from '../../pages/Index/Index';

export default function Main({setPage}) {
    return (
        <main>
            <Title />
            <Routes>
               {<Route path='/' element={<Home setPage={setPage} />} name='home' />}
                <Route path='/new' element={<New setPage={setPage} />} name='new' />
                <Route path='/index' element={<Index setPage={setPage} />} name='index' />
            </Routes>
        </main>
    );
}