import './App.css';

import Background from '../components/Background/Background';
import Main from '../components/Main/Main';
import Nav from '../components/Menu/Nav';

export default function App() {
  return (
    <div className="App">
      <Background />
      <Main />
      <Nav />
    </div>
  );
}