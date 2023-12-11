import './Main.css';

import { Route, Routes } from 'react-router-dom';

import Title from '../Title/Title';
import Home from '../../pages/Home/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import New from '../../pages/New/New';
import Index from '../../pages/AllBluRays/AllBluRays';
import ShowBluRay from '../../pages/ShowBluRay/ShowBluRay';
import Feed from '../../pages/Feed/Feed';
import OtherBluRay from '../../pages/OtherBluRay/OtherBluRay';
import User from '../../pages/User/User';
import Error from '../../pages/Error/Error';

export default function Main() {
    return (
        <main>
            <Title />
            <Routes>
               {<Route path='/' element={<Home />} name='home' />}
                <Route path='/new' element={<PrivateRoute><New /></PrivateRoute>} name='new' />
                <Route path='/blu-rays' element={<PrivateRoute><Index /></PrivateRoute>} name='index' />
                <Route path="/blu-rays/:id" element={<PrivateRoute><ShowBluRay /></PrivateRoute>} />
                <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
                <Route path="/feed/:id" element={<PrivateRoute><OtherBluRay /></PrivateRoute>} />
                <Route path="/user/:id" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </main>
    );
}