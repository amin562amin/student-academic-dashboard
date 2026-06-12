import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactNode;
}


function ProtectedRoute({ children}: ProtectedRouteProps){
    const isLoggedIn = true;

    // If the user isnt logged in send them to /
    if (!isLoggedIn){
        return <Navigate to="/" replace/>;
    }

    return children;
}

export default ProtectedRoute;