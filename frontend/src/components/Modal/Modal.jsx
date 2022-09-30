import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAwaitAnimation from "../../hooks/useAwaitAnimation";
import { setIsShowModal } from '../../store/slices/isShowModal.slice';
import LeaveParticles from "../Autumn_Leaves/LeavesParticles";
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();

    const isShowModal = useSelector(state => state.isShowModal);

    const layoutRef = useRef();

    const modalActions = () => {
        document.body.style.overflowY = '';
    };

    const outModalActions = () => {
        document.body.style.overflowY = 'hidden';
    };

    const { animateClass } = useAwaitAnimation(
        layoutRef,
        isShowModal,
        1,
        'flex',
        ['fadeInModal', 'fadeOutModal'],
        outModalActions,
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
                    <span className="title"></span>
                    <button className="btn_close"><span onClick={closeModal}>X</span></button>
                </div>
            </div>

            <div className="Target" onClick={closeModal}>

            </div>

        </div>
    );
};

export default Modal;