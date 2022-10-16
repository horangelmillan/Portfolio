import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { waitAnimationContent } from "../../../../store/slices/modalContent.slice";
import axios from "axios";
import './Login.css';

const Login = () => {

    const LoginRef = useRef();

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const login = (credentials) => {
        axios.post('http://localhost:4000/api/v1/users/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                dispatch(waitAnimationContent('Profile', { ref: LoginRef }));
            });
    };

    return (
        <div className="Login">
            <h2 className="title">Login</h2>
            <form onSubmit={handleSubmit(data => login(data))}>
                <label htmlFor="email">
                    E-mail:
                    <input type="email" {...register('email')} id="email" />
                </label>

                <label htmlFor="password">
                    Password:
                    <input type="password" {...register('password')} id='password' />
                </label>

                <button type="submit">Submmit</button>
            </form>
        </div>
    );
};

export default Login;