import './App.css';

import { useState } from 'react';
import { PageContext } from '../data';

import Background from '../components/Background/Background';
import Main from '../components/Main/Main';
import BottomNav from '../components/BottomNav/BottomNav';

export default function App() {
  const [page, setPage] = useState('home')
  const { Provider: PageInfo } = PageContext;

  return (
    <div className="App">
      <PageInfo
        value={{
          page: page,
          setPage: setPage,
        }}
      >
        <Background />
        {/* <BottomNav /> */}
        <Main />
      </PageInfo>
    </div>
  );
}