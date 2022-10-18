import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAwaitAnimation from "../../hooks/useAwaitAnimation";
import { setIsShowModal } from '../../store/slices/isShowModal.slice';
import LeaveParticles from "../Autumn_Leaves/LeavesParticles";
import Contents from "./components/Contents/Contents";
import NavContent from './components/NavContent/NavContent';
import useVerifyToken from "./hooks/useVerifyToken";
import './Modal.css';

const Modal = () => {

    const dispatch = useDispatch();

    const isShowModal = useSelector(state => state.isShowModal);

    const layoutRef = useRef();

    const modalActions = (state) => {
        document.body.style.overflowY = state ? 'hidden' : '';
    };

    useVerifyToken(isShowModal);

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

            <LeaveParticles lot={25} elementActive={isShowModal} LeaveRef={'modalRef'} />

            <NavContent isShowModal={isShowModal}/>

            <Contents modalState={isShowModal} closeModal={closeModal} />

            <div className="Target" onClick={closeModal}>

            </div>

        </div>
    );
};

export default Modal;