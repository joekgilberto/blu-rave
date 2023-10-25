import './App.css';

import { useState } from 'react';

import Background from '../components/Background/Background';
import Main from '../components/Main/Main';

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <Background page={page} />
      <Main setPage={setPage} />
    </div>
  );
}