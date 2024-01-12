import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { user, isLoading, loginWithRedirect } = useAuth0();


    function evalCurrentUser() {
        if (!isLoading && !user) {
            loginWithRedirect();
        }
    }

    useEffect(() => {
        evalCurrentUser();
    }, [isLoading]);

    return children;

}

export default PrivateRoute;
