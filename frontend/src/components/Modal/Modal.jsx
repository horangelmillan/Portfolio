import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAwaitAnimation from "../../hooks/useAwaitAnimation";
import { setIsShowModal } from '../../store/slices/isShowModal.slice';
import LeaveParticles from "../Autumn_Leaves/LeavesParticles";
import Login from './components/Login/Login';
import Management from './components/management/Management';
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();

    const isShowModal = useSelector(state => state.isShowModal);

    const getSubComponent = (isShowModal) => {
        console.log(isShowModal)
        switch (isShowModal.title) {
            case "Login": return <Login />
            case "Management": return <Management />
        };
    };

    const layoutRef = useRef();

    const modalActions = (state) => {
        document.body.style.overflowY = state ? 'hidden' : '';
    };

    const { animateClass } = useAwaitAnimation(
        layoutRef,
        isShowModal,
        1,
        'flex',
        ['fadeInModal', 'fadeOutModal'],
        modalActions
    );

    const closeModal = () => {
        dispatch(setIsShowModal(false));
    };

    return (
        <div
            ref={layoutRef}
            className={`Layout ${animateClass}`}
        >

            <LeaveParticles lot={25} modalActive={isShowModal} LeaveRef={'modalRef'} />

            <div className="Modal">
                <div className="header_modal">
                    <span className="title">{isShowModal.title}</span>
                    <button className="btn_close"><span onClick={closeModal}>X</span></button>
                </div>

                {
                    getSubComponent(isShowModal)
                }

                <button onClick={() => dispatch(setIsShowModal({ title: 'Management'}))}>Cambia</button>

            </div>

            <div className="Target" onClick={closeModal}>

            </div>

        </div>
    );
};

export default Modal;