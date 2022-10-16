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

            <button onClick={() => dispatch(waitAnimationContent('Management', { ref: profileRef }))}>
                management
            </button>

        </div>
    );
};

export default Profile;