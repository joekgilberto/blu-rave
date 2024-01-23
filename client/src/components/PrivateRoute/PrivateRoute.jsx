import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();


    function evalCurrentUser() {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }

    useEffect(() => {
        evalCurrentUser();
    }, []);

    return children;

}

export default PrivateRoute;
