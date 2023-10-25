import './AllBluRays.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';

import Loading from '../../components/Loading/Loading';

const dummyData = [{
    title: "Bullet Train",
    steelbook: true,
    four_k: true,
    format: "Film",
    notes: "Steelbook bought on sale from Amazon.",
    date_added: "2023-10-19"
},
{
    title: "Knives Out",
    steelbook: false,
    four_k: true,
    format: "Film",
    notes: "Look into a steelbook down the line.",
    date_added: "2023-10-23"
},
{
    title: "Over the Garden Wall",
    steelbook: false,
    four_k: false,
    format: "Miniseries",
    notes: "Your rarest blu-ray!",
    date_added: "2023-10-01"
},
{
    title: "Adventure Time: The Complete Series",
    steelbook: false,
    four_k: false,
    format: "Television",
    notes: "Really cool packaging.",
    date_added: "2023-09-04"
}]

export default function AllBluRays() {

    const { setPage } = useContext(PageContext);
    const [format, setFormat] = useState(true)
    const [allBluRays, setAllBluRays] = useState(null);

    useEffect(() => {
        setPage("index")
        setAllBluRays(dummyData)
    }, [])

    function handleClick() {
        setFormat(!format)
    }

    return (
        <div className="AllBluRays">
            <div className='list'>
                {allBluRays?
                <>
                {format ?
                    <>
                    {allBluRays.map((bluRay,idx)=>{
                        return(
                        bluRay.format==="Film" || bluRay.format==="Short"?
                        <div className='media' key={idx}>
                            <p className='italic'>{bluRay.title}</p>
                            <p className='details'>{bluRay.four_k?"4K":null} {bluRay.steelbook?"★":null}</p>
                        </div>:null
                        )
                    })}
                    </>
                    :
                    <>
                    {allBluRays.map((bluRay,idx)=>{
                        return(
                        bluRay.format==="Television" || bluRay.format==="Miniseries"?
                        <div className='media' key={idx}>
                            <p className='italic'>{bluRay.title}</p>
                            <p className='details'>{bluRay.four_k?"4K":null} {bluRay.steelbook?"★":null}</p>
                        </div>:null
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