import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/RequireAuth";

const App = () => {
	return (
		<div className="w-[1846px] h-[980px] bg-white flex flex-col justify-center items-center">
			<Routes>
				<Route
					path="/signin"
					element={
						<RequireAuth redirectTo={"/"}>
							<LoginPage />
						</RequireAuth>
					}
				/>

				<Route
					path="/*"
					element={
						<RequireAuth redirectTo={"/signin"}>
							<Dashboard />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
