import './BluRay.css';
import * as tools from '../../utilities/tools';

export default function BluRay({ bluRay, idx, listLength, others }) {
    return (
        <a className={`BluRay ${idx === listLength - 1 ? "last" : null}`} href={others ? `/feed/${bluRay.id}` : `/blu-rays/${bluRay.id}`}>
            <p className='italic'>{tools.putTheBack(bluRay.title)}</p>
            <div className='details'>
                <img className={`format ${bluRay.definition === "4K" ? "fourK" : null}`} src={bluRay.definition === "4K" ? "https://i.imgur.com/K9QlNj7.png" : bluRay.definition === "DVD" ? "https://i.imgur.com/n0Px4Ko.png" : "https://i.imgur.com/RKBncJe.png"} alt={bluRay.definition === "4K" ? "4K" : bluRay.definition === "DVD" ? "DVD" : "Blu-Ray"} />
                <p className='special'>{bluRay.steelbook ? "★" : null}</p>
            </div>
        </a>
    )
}