import React from "react";
import { useSelector } from 'react-redux';
import './retractImg.css';

const RetractImg = () => {
    const isRetract = useSelector(state => state.isRetract);
    const imgSwuitched = useSelector(state => state.switchImg);    

    return (
        <div className="retract-img" style={{background: `url('${imgSwuitched}') 100%/100% no-repeat fixed`}}>
            <ul>
                <div className={`fallback`} style={{ transform: `translateX(-${isRetract}%)` }}></div>
            </ul>
        </div>
    )
};

export default RetractImg;