import './User.css';

import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import BluRay from '../../components/BluRay/BluRay';
import Loading from '../../components/Loading/Loading';

export default function User() {

    const navigate = useNavigate()
    const { setPage } = useContext(PageContext);
    const { id } = useParams();
    const [format, setFormat] = useState(true)
    const [allBluRays, setAllBluRays] = useState(null);
    const [movies, setMovies] = useState(null)
    const [tvShows, setTvShows] = useState(null)
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();


    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getUserBluRays(accessToken, owner, id).then((res) => {
            setAllBluRays(res)
            const cacheMovies = []
            const cacheTvShows = []

            if (!res.length){
                navigate('/feed')
            } else if (res[0].username === user.nickname){
                navigate('/blu-rays')
            } else {
                for (let bluRay of res) {
                    if (bluRay.format === "Film" || bluRay.format === "Short") {
                        cacheMovies.push(bluRay)
                    } else if (bluRay.format === "Television" || bluRay.format === "Miniseries") {
                        cacheTvShows.push(bluRay)
                    }
                }
                setMovies(cacheMovies)
                setTvShows(cacheTvShows)
            }
        })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        setPage("user")
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            handleRequest()
        }
    }, [isAuthenticated])

    function handleClick() {
        setFormat(!format)
    }

    return (
        allBluRays && movies && tvShows ?
            <div className="User">
                {allBluRays.length ?
                    <p className='owner'>{allBluRays[0].username}'s Collection</p>
                    : null}
                <div className='list'>

                    <>
                        {format ?
                            <>
                                {movies.length ?
                                    movies.map((bluRay, idx) => {
                                        return (
                                            <BluRay key={idx} bluRay={bluRay} idx={idx} listLength={movies.length} others={true} />
                                        )
                                    })
                                    :
                                    <p className='none'>None collected yet.</p>
                                }
                            </>
                            :
                            <>
                                {tvShows.length ?
                                    tvShows.map((bluRay, idx) => {
                                        return (
                                            <BluRay key={idx} bluRay={bluRay} idx={idx} listLength={tvShows.length} others={true} />
                                        )
                                    })
                                    :
                                    <p className='none'>None collected yet.</p>
                                }
                            </>

                        }
                    </>

                </div>
                <div className='formats'>
                    <button onClick={handleClick} className={format ? "selected" : null}>Film</button>
                    <button onClick={handleClick} className={!format ? "selected" : null}>Television</button>
                </div>
            </div>
            :
            <Loading />
    );
}