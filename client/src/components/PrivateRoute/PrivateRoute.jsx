import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { user, isLoading } = useAuth0();


    function evalCurrentUser() {
        console.log(isLoading)
        console.log(user)
        if (!isLoading && !user) {
            return navigate("/");
        }
    }

    useEffect(() => {
        evalCurrentUser();
    }, [isLoading]);

    return children;

}

export default PrivateRoute;
