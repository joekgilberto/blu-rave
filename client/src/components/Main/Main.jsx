import './Main.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Title from '../Title/Title';
import Home from '../../pages/Home/Home';
import New from '../../pages/New/New';

export default function Main() {
    const [page, setPage] = useState('home')

    return (
        <main>
            <Title />
            <Routes>
                <Route path='/' element={<Home setPage={setPage} />} name='home' />
                <Route path='/new' element={<New setPage={setPage} />} name='new' />
            </Routes>
        </main>
    );
}