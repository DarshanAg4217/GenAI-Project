import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import "../auth.form.scss";


const Protected = ({ children }) => {

    const { loading, user } = useAuth();

    if(loading){
        return (
            <div className="fullscreen-loader">
                <div className="loader-box">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if(!user){
        return <Navigate to="/login" />;
    }
    return children;
 

}

export default Protected;