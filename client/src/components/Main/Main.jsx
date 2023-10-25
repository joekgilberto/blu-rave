import './Main.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Title from '../Title/Title';

export default function Main() {
    const [page, setPage] = useState('home')

    return (
        <main>
            <Title />
            <Routes>
            </Routes>
        </main>
    );
}