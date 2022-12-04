import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";

function Layout() {
	return (
		<div className="w-[1846px] h-[980px] bg-amber-50 flex flex-col justify-start items-center">
			<NavBar />
			<Outlet />
		</div>
	);
}

export default Layout;
