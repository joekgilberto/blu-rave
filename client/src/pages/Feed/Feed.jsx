import './Feed.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import Post from '../../components/Post/Post';
import Loading from '../../components/Loading/Loading';

export default function Feed() {

    const [bluRays, setBluRays] = useState(null);
    const { setPage } = useContext(PageContext);
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getBluRayFeed(accessToken, owner).then((res) => {
            setBluRays(res)
        })
            .catch((err) => console.log(err))
    }

    useEffect(()=>{
        setPage("feed")
    },[])

    useEffect(()=>{
        if(isAuthenticated){
            handleRequest()
        }
    },[isAuthenticated])

    return (
        <div className='Feed'>
            <h2>SOCIAL FEED</h2>
            <div className='feed-list'>
            {bluRays?
                bluRays.length?
                bluRays.map((bluRay, idx)=>{
                    return <Post key={idx} bluRay={bluRay} listLength={bluRays.length} idx={idx} />
                })
                :
                <p className='none'>No collections yet.</p>
            :
            <Loading />}
            </div>
        </div>
    );
}