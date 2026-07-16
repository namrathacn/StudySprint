import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";


function Logout() {

    const navigate = useNavigate();


    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };



    return (

        <button

            onClick={logout}

            className="
            flex
            items-center
            gap-2
            text-slate-300
            hover:text-red-400
            transition
            "

        >

            <FiLogOut size={22}/>

            Logout

        </button>

    );

}


export default Logout;