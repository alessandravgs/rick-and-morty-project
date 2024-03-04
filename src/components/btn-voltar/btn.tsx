import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const BtnVoltar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <nav className="pt-4">
            <button
                onClick={handleClick}
                className="btn btn-outline-primary"
                style={{ borderRadius: "50%", padding: "10px" }}
            >
                <GrPrevious />
            </button>
        </nav>
    );
};
