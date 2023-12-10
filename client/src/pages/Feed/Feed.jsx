import './Feed.css';

import { useState } from 'react';
import Post from '../../components/Post/Post';

export default function Feed() {

    const [bluRays, setBluRays] = useState(null);

    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getEveryonesBluRays(accessToken, owner).then((res) => {
            setBluRays(res)
        })
            .catch((err) => console.log(err))
    }

    useEffect(()=>{
        if(user){
            setUsername(user.nickname)
        }
    },[user])

    return (
        <div>
            {bluRays?
                bluRays.map((bluRay, idx)=>{
                    return <Post key={idx} bluRay={bluRay} />
                })
            :null}
        </div>
    );
}