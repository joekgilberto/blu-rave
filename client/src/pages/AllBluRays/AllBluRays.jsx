import './AllBluRays.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import BluRay from '../../components/BluRay/BluRay';
import Loading from '../../components/Loading/Loading';

export default function AllBluRays() {

    const { setPage } = useContext(PageContext);
    const [format, setFormat] = useState(true)
    const [allBluRays, setAllBluRays] = useState(null);
    const [movies, setMovies] = useState(null)
    const [tvShows, setTvShows] = useState(null)
    const { user, getAccessTokenSilently } = useAuth0();


    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getAllBluRays(accessToken, owner).then((res) => {
            setAllBluRays(res)
            const cacheMovies = []
            const cacheTvShows = []

            for (let bluRay of res){
                if (bluRay.format === "Film" || bluRay.format === "Short"){
                    cacheMovies.push(bluRay)
                } else if (bluRay.format === "Television" || bluRay.format === "Miniseries"){
                    cacheTvShows.push(bluRay)
                }
            }
            setMovies(cacheMovies)
            setTvShows(cacheTvShows)
        })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        setPage("index")
    }, [])

    useEffect(()=>{
        if(user){
            handleRequest()
        }
    },[user])

    function handleClick() {
        setFormat(!format)
    }

    return (
        <div className="AllBluRays">
            <div className='list'>
                {allBluRays && movies && tvShows ?
                    <>
                        {format ?
                            <>
                                {movies.map((bluRay, idx) => {
                                    return (
                                            <BluRay key={idx} bluRay={bluRay} idx={idx} listLength={movies.length} />
                                    )
                                })}
                            </>
                            :
                            <>
                                {tvShows.map((bluRay, idx) => {
                                    return (
                                        <BluRay key={idx} bluRay={bluRay} idx={idx} listLength={tvShows.length} />
                                    )
                                })}
                            </>

                        }
                    </>
                    :
                    <Loading />}
            </div>
            <div className='formats'>
                <button onClick={handleClick} className={format ? "selected" : null}>Film</button>
                <button onClick={handleClick} className={!format ? "selected" : null}>Television</button>
            </div>
        </div>
    );
}