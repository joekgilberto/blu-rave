import './Main.css';

import { Route, Routes } from 'react-router-dom';

import Title from '../Title/Title';
import Home from '../../pages/Home/Home';
import New from '../../pages/New/New';
import Index from '../../pages/AllBluRays/AllBluRays';
import ShowBluRay from '../../pages/ShowBluRay/ShowBluRay';
import Error from '../../pages/Error/Error';

export default function Main() {
    return (
        <main>
            <Title />
            <Routes>
               {<Route path='/' element={<Home />} name='home' />}
                <Route path='/new' element={<New />} name='new' />
                <Route path='/blu-rays' element={<Index />} name='index' />
                <Route path="/blu-rays/:id" element={<ShowBluRay />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </main>
    );
}