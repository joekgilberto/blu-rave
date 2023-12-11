import './Post.css';

export default function Post({ bluRay, idx, listLength }) {

    console.log(bluRay)

    return (
        <div className={`Post ${idx === listLength - 1 ? "last" : null}`}>
            <a href={`/feed/${bluRay.id}`}>
                <p className='update'><span className='bold'>{bluRay.username}</span> collected <span className='bold italic'>{bluRay.title}</span>{bluRay.year ? ` (${bluRay.year})` : null} on {bluRay.definition}!</p>
            </a>
            <p className='added-on'>On {bluRay.dateAdded}</p>
        </div>
    );
}