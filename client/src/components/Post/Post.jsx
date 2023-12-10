import './Post.css';

export default function Post({ bluRay }) {

    console.log(bluRay)
    
    return (
        <div>
            <p>{bluRay.username} collected {bluRay.title}{bluRay.year ? `(${bluRay.year})` : null}</p>
            <p>{bluRay.dateAdded}</p>
        </div>
    );
}