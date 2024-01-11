import Nav from '../Nav/SideNav';
import './Background.css';
import Footer from '../Footer/Footer';

export default function Background({ page }) {
  return (
    <div className="Background">
      <div className='back-nav'>
        <img src="https://i.imgur.com/sw3dkDJ.png" alt="disc" />
        <Nav page={page} />
      </div>
      <Footer label={'desktop'} />
    </div>
  );
}