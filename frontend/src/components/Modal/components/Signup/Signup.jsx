import { useRef } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {

    const signupRef = useRef();

    const dispatch = useDispatch();

    return (
        <div className="Signup" ref={signupRef}>

        </div>
    );
};

export default Signup;