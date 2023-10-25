import './Modal.css';

import { useContext } from 'react';
import { PageContext } from '../../data';

export default function Modal() {

    const { setModal } = useContext(PageContext);

    function handleClick(){
        setModal(false)
    }

    return (
        <div className="Modal">
            <div className='confirm'>
                <h2>Pause</h2>
                <p>Are you sure you want to delete this blu-ray?</p>
                <div className='delete-options'>
                    <button className='delete' onClick={handleClick}>Delete</button>
                    <button className='cancel' onClick={handleClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
}