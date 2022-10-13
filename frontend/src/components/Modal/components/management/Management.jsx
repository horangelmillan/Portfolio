import React, { useState } from "react";
import axios from 'axios';
import './Management.css';

const Management = () => {

    const [urlImage, setImageUrl] = useState();
    const [inputUrl, setInputUrl] = useState();
    const [inputTitle, setInputTitle] = useState();

    const submmit = () => {
        axios.post('http://localhost:4000/api/v1/management/screenShot', { urlDeploy: inputUrl, title: inputTitle })
            .then(data => {
                console.log(data);
                setImageUrl(data.data?.imageTemp);
            })
    };

    return (
        <div className="Management">
            <h2 className="title">Projects manager</h2>
            <input type="text" onChange={e => setInputUrl(e.target.value)} />
            <input type="text" onChange={e => setInputTitle(e.target.value)} />
            <button onClick={submmit}>summit</button>
            <img src={urlImage} alt="" />
        </div>
    )
};

export default Management;