import Nav from '../Nav/Nav';
import './Background.css';

export default function Background({page}) {
  return (
    <div className="Background">
        <img src="https://i.imgur.com/sw3dkDJ.png" alt="disc" />
        <Nav page={page} />
    </div>
  );
}