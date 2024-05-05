import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function CheckAuth({action}) {
    const { authUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (action == 'isLogin') {
            if (!authUser?.id) {
                navigate('/auth/login');
            }
        }
        if (action == 'isLogout') {
            if (authUser?.id) {
                navigate('/admin');
            }
        }
    }, [])
}