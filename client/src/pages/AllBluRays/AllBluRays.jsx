import './AllBluRays.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import Loading from '../../components/Loading/Loading';

export default function AllBluRays() {

    const { setPage } = useContext(PageContext);
    const [format, setFormat] = useState(true)
    const [allBluRays, setAllBluRays] = useState(null);
    const { user, getAccessTokenSilently } = useAuth0();


    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getAllBluRays(accessToken, owner).then((res) => {
            setAllBluRays(res)
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
                {allBluRays ?
                    <>
                        {format ?
                            <>
                                {allBluRays.map((bluRay, idx) => {
                                    return (
                                        bluRay.format === "Film" || bluRay.format === "Short" ?
                                            <a href={`/blu-rays/${bluRay.id}`} key={idx}>
                                                <div className='media'>
                                                    <p className='italic'>{bluRay.title}</p>
                                                    <p className='details'>{bluRay.definition == "4K" ? "4K" : bluRay.definition == "DVD" ? "DVD" : null} {bluRay.steelbook ? "★" : null}</p>
                                                </div>
                                            </a>
                                            : null
                                    )
                                })}
                            </>
                            :
                            <>
                                {allBluRays.map((bluRay, idx) => {
                                    return (
                                        bluRay.format === "Television" || bluRay.format === "Miniseries" ?
                                            <a href={`/blu-rays/${bluRay.id}`} key={idx}>
                                                <div className='media'>
                                                    <p className='italic'>{bluRay.title}</p>
                                                    <p className='details'>{bluRay.definition == "4K" ? "4K" : bluRay.definition == "DVD" ? "DVD" : null} {bluRay.steelbook ? "★" : null}</p>
                                                </div>
                                            </a>
                                            : null
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