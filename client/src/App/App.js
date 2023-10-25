import './App.css';

import { useState } from 'react';
import { PageContext } from '../data';

import Background from '../components/Background/Background';
import Main from '../components/Main/Main';
import Modal from '../components/Modal/Modal';

export default function App() {
  const [page, setPage] = useState('home')
  const [modal, setModal] = useState(false)
  const { Provider: PageInfo } = PageContext;

  return (
    <div className="App">
      <PageInfo
        value={{
          page: page,
          setPage: setPage,
          setModal: setModal
        }}
      >
        <Background />
        <Main />
        {modal ?
          <Modal />
          : null}
      </PageInfo>
    </div>
  );
}