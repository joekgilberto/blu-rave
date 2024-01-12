import './Post.css';
import * as tools from '../../utilities/tools';

export default function Post({ bluRay, idx, listLength }) {
    return (
        <div className={`Post ${idx === listLength - 1 ? "last" : null}`}>
            <a href={`/feed/${bluRay.id}`}>
                <p className='update'><span className='bold'>{bluRay.username}</span> collected <span className='bold italic'>{tools.putTheBack(bluRay.title)}</span>{bluRay.year ? ` (${bluRay.year})` : bluRay.startYear && bluRay.endYear? ` (${bluRay.startYear}-${bluRay.endYear})` : bluRay.startYear && !bluRay.endYear ? ` (${bluRay.startYear})`:null} on {bluRay.definition}!</p>
            </a>
            <p className='added-on'>On {bluRay.dateAdded}</p>
        </div>
    );
}