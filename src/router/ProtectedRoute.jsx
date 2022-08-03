import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export function ProtectedRoute ({children}) {
    const { user, loading } = useAuth();

    if (!user) return <Navigate to="/login" />;
    if (loading) return <div>Loading...</div>;
    return <>{children}</>;
}

export function ProtectedRouteLogin ({children}) {
    const { user, loading } = useAuth();

    if (user) return <Navigate to="/dashboard" />;
    if (loading) return <div>Loading...</div>;
    return <>{children}</>;
}