import './Index.css';

import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../data';

export default function Index() {

    const { setPage } = useContext(PageContext);
    const [format, setFormat] = useState(true)

    function handleClick() {
        setFormat(!format)
    }

    useEffect(() => {
        setPage("index")
    }, [])

    return (
        <div className="Index">
            <div className='list'>
                {format ?
                    <>
                        <div className='media'>
                            <p className='italic'>Avengers: 4-Movie Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Batman, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Birds of Prey</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Bob's Burgers Movie, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Bullet Train</p>
                            <p className='details'>4K ★</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Castle in the Sky</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Cruella</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Dark Knight Trilogy, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Elf</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Fantastic Mr. Fox</p>
                            <p className='details'>★</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>The Godfather: The Coppola Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Harry Potter Years 1 & 2: Two-Film Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Harry Potter Years 3 & 4: Two-Film Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Harry Potter Years 5 & 6: Two-Film Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Harry Potter Year 7: Two-Film Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Howl's Moving Castle</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Inception</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Justice League, Zack Snyder's</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Kiki's Delivery Service</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Knives Out</p>
                            <p className='details'>4K</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Logan</p>
                            <p className='details'>4K</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Man of Steel</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Mitchells vs. the Machines, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Princess Mononoke</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Red</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Royale Tenenbaums, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Santa Clause, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>School of Rock</p>
                            <p className='details'>★</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Secret Life of Walter Mitty, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Sherlock Holmes</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Silence of the Lambs, The</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Spider-Man: Into The Spider-Verse</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Star Wars: Episodes IV, V, & VI</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Suicide Squad: Extended Cut</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>The Suicide Squad</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Suicide Squad: Hell to Pay</p>
                            <p className='details'>4K</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>WALL•E</p>
                            <p className='details'>4K ★</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Wonder Woman: 1984</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>X-Men: First Class</p>
                        </div>
                        <div className='media no-underline'>
                            <p className='italic'>X-Men: Days of Future Past</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='media'>
                            <p className='italic'>30 Rock</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Adventure Time: The Complete Collection</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Adventure Time: Distant Lands</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Batman: The Animated Series</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Gravity Falls: The Complete Series</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Over the Garden Wall</p>
                        </div>
                        <div className='media'>
                            <p className='italic'>Steven Universe: The Complete Collection</p>
                        </div>
                        <div className='media no-underline'>
                            <p className='italic'>Stranger Things: Season 1</p>
                        </div>
                    </>

                }

            </div>
            <div className='formats'>
                <button onClick={handleClick} className={format ? "selected" : null}>Film</button>
                <button onClick={handleClick} className={!format ? "selected" : null}>Television</button>
            </div>
        </div>
    );
}