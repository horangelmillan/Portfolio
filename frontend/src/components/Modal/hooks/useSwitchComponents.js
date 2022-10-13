import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/Login/Login';
import Management from '../components/Management/Management';
import Profile from '../components/Profile/Profile';
import Signup from '../components/Signup/Signup';

const useSwitchComponents = () => {

    const modalContent = useSelector(state => state.modalContent);

    const [component, setComponent] = useState();

    useEffect(() => {

        switch (modalContent) {
            case "Login": return setComponent(<Login />)
            case "Management": return setComponent(<Management />)
            case "Signup": return setComponent(<Signup />)
            case "Profile": return setComponent(<Profile />)
            default:
        };

    }, [modalContent])

    return { component };
};

export default useSwitchComponents;