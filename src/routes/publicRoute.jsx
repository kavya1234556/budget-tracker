import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const PublicRoute = () => {
    // const { isAuthenticated } = useAuth();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		return navigate('/');
	// 	}
	// 	return () => {};
	// }, [isAuthenticated, navigate]);

	return <Outlet />;
}

export default PublicRoute