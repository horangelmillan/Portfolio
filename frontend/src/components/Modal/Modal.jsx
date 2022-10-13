import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAwaitAnimation from "../../hooks/useAwaitAnimation";
import { setIsShowModal } from '../../store/slices/isShowModal.slice';
import LeaveParticles from "../Autumn_Leaves/LeavesParticles";
import Contents from "./components/Contents/Contents";
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();

    const isShowModal = useSelector(state => state.isShowModal);

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

            <Contents modalState={isShowModal} closeModal={closeModal} />

            <div className="Target" onClick={closeModal}>

            </div>

        </div>
    );
};

export default Modal;