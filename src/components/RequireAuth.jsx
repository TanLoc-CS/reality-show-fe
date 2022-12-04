import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
	if (redirectTo === "/")
		return localStorage.getItem("isAuthenticated") ? (
			<Navigate to={redirectTo} replace={true} />
		) : (
			children
		);

	return !localStorage.getItem("isAuthenticated") ? (
		<Navigate to={redirectTo} replace={true} />
	) : (
		children
	);
}

export default RequireAuth;
