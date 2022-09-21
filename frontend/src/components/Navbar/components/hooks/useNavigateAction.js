import { useLocation, useNavigate } from "react-router-dom";

const useNavigateAction = (ref) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (to) => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });

        if (location.pathname === to) {
            return
        };

        ref.current.style.animation = 'fadeOut-left 1s';
        setTimeout(() => {
            navigate(to);
        }, 900);
    };
};

export default useNavigateAction;