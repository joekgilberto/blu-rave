import './OtherBluRay.css';

import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";
import * as tools from '../../utilities/tools';

import Loading from '../../components/Loading/Loading';

export default function OtherBluRay() {

    const navigate = useNavigate()
    const { setPage } = useContext(PageContext);
    const [bluRay, setBluRay] = useState(null);
    const { id } = useParams();
    const { user, getAccessTokenSilently } = useAuth0();

    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getOtherBluRay(accessToken, owner, id).then((res) => {
            res ? setBluRay(res) : navigate("/blu-rays");
        })
            .catch((err) => {
                console.log(err)
                navigate("/blu-rays")
            })
    }

    useEffect(() => {
        setPage("other")
    }, [])

    useEffect(() => {
        if (user) {
            handleRequest()
        }
    }, user)

    useEffect(() => {
        if (bluRay && user) {
            if (bluRay.username === user.username) {
                navigate(`/blu-rays/${bluRay.id}`)
            }
        }
    }, [bluRay])

    return (
        <div className="OtherBluRay">
            {bluRay ?
                <>
                                    <a href={`/user/${bluRay.email}`}><p className='owner'>{bluRay.username}'s Collection</p></a>

                    <h2>{tools.putTheBack(bluRay.title)}</h2>
                    {bluRay.year ?
                        <p className='release-year'>{bluRay.year}</p>
                        : null}
                    <p>Format: {bluRay.format}</p>
                    <p>Definition: {bluRay.definition == "4K" ? "4K" : bluRay.definition == "Blu-Ray" ? "HD" : "SD"}</p>
                    {bluRay.steelbook ? <p>Special Edition</p> : null}

                    {bluRay.notes ?
                        <div className='notes'>
                            <p className='underline'>Notes:</p>
                            <p>{bluRay.notes}</p>
                        </div>
                        : null}
                    <p className='date-added'>Added {bluRay.dateAdded}</p>
                </>
                :
                <Loading />}
        </div>
    );
}