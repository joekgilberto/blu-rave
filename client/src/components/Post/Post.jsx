import './Post.css';

export default function Post({bluRay}) {
  return (
    <div>
        <p>{bluRay.nickname} collected {bluRay.title}{bluRay.year?`(${bluRay.year})`:null}</p>
    </div>
  );
}