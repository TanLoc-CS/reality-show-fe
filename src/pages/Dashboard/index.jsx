import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./Outlets/Home";
import Trainee from "./Outlets/Trainee";

function Dashboard() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />} />
				<Route path="trainee/:ssn" element={<Trainee />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default Dashboard;
