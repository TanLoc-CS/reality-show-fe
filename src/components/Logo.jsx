import React from "react";

function Logo(props) {
	const { size } = props;

	if (size === "mini")
		return (
			<div className="w-[140px] h-[56px] mx-8 bg-slate-50 flex flex-col justify-center items-center rounded-lg shadow-lg">
				<h1 className="text-[14px] font-semibold">REALITY SHOW</h1>
			</div>
		);

	return (
		<div className="w-[248px] h-[80px] bg-slate-50 mb-8 flex flex-col justify-center items-center rounded-lg shadow-lg">
			<h1 className="text-[28px] font-semibold">REALITY SHOW</h1>
		</div>
	);
}

export default Logo;
//
//
