import ToggleAuth from '../ToggleAuth/ToggleAuth';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <a href="/">
        <h1>BLU-RAVE</h1>
      </a>
      <ToggleAuth />
    </div>
  );
}