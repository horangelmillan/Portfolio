import useSwitchComponents from '../../hooks/useSwitchComponents';

const Contents = ({ modalState, closeModal }) => {

    const { component } = useSwitchComponents(modalState);

    return (
        <div className="Modal">

            <button className="btn_close"><span onClick={closeModal}>X</span></button>

            {
                component
            }

        </div>
    );
};

export default Contents;