import './BluRay.css';

export default function BluRay({bluRay, idx, listLength, others}) {
    return (
        <a className="BluRay" href={others?`/feed/${bluRay.id}`:`/blu-rays/${bluRay.id}`}>
            <div className={`media ${idx === listLength - 1 ? "last" : null}`}>
                <p className='italic'>{bluRay.title}</p>
                <p className='details'>{bluRay.definition == "4K" ? "4K" : bluRay.definition == "DVD" ? "DVD" : null} {bluRay.steelbook ? "★" : null}</p>
            </div>
        </a>
    )
}