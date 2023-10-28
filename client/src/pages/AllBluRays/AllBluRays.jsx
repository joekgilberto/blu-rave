import './AllBluRays.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';

import Loading from '../../components/Loading/Loading';

const dummyData = [{
    title: "Bullet Train",
    steelbook: true,
    fourK: true,
    format: "Film",
    notes: "Steelbook bought on sale from Amazon.",
    dateAdded: "2023-10-19"
},
{
    title: "Knives Out",
    steelbook: false,
    fourK: true,
    format: "Film",
    notes: "Look into a steelbook down the line.",
    dateAdded: "2023-10-23"
},
{
    title: "Over the Garden Wall",
    steelbook: false,
    fourK: false,
    format: "Miniseries",
    notes: "Your rarest blu-ray!",
    dateAdded: "2023-10-01"
},
{
    title: "Adventure Time: The Complete Series",
    steelbook: false,
    fourK: false,
    format: "Television",
    notes: "Really cool packaging.",
    dateAdded: "2023-09-04"
}]

export default function AllBluRays() {

    const { setPage } = useContext(PageContext);
    const [format, setFormat] = useState(true)
    const [allBluRays, setAllBluRays] = useState(null);

    async function handleRefresh() {

        await bluRayServices.getAllBluRays().then((res) => {
            setAllBluRays(res)
        })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        setPage("index")
        handleRefresh()
    }, [])

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
                                                    <p className='details'>{bluRay.fourK ? "4K" : null} {bluRay.steelbook ? "★" : null}</p>
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
                                                    <p className='details'>{bluRay.fourK ? "4K" : null} {bluRay.steelbook ? "★" : null}</p>
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