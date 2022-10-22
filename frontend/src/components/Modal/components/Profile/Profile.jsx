import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { waitAnimationContent } from '../../../../store/slices/modalContent.slice';
import './Profile.css';

const Profile = () => {

    const profileRef = useRef();

    const dispatch = useDispatch();

    return (
        <div className="Profile" ref={profileRef}>

            <h2 className='title'>Profile</h2>

            <img src="" alt="" />

            <div className='list_manages'>
                <ul className='direction_column'>

                    <div className='card_manage'>
                    </div>
                    <div className='card_manage'>
                    </div>
                    <div className='card_manage'>
                    </div>
                    <div className='card_manage'>
                    </div>
                </ul>

                <div className='gradient'></div>
            </div>

            <button onClick={() => dispatch(waitAnimationContent('Management', { ref: profileRef }))}>
                management
            </button>

        </div>
    );
};

export default Profile;