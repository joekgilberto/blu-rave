import ToggleAuth from '../ToggleAuth/ToggleAuth';
import './Title.css';

export default function Title() {
  return (
    <div className="Title">
      <a href="/">
        <h1>BLU-RAVE</h1>
      </a>
      <ToggleAuth />
    </div>
  );
}