import React from "react";
import { Link } from "react-router-dom";

function TraineeCard() {
	const ssn = "000000003112";
	return (
		<Link
			to={"/trainee/" + ssn}
			className="w-[280px] h-[320px] m-8 px-4 py-4 flex flex-col justify-start items-center bg-indigo-50 hover:bg-indigo-100 hover:-translate-y-2 rounded-lg shadow-2xl"
		>
			<img
				src="https://i.pinimg.com/736x/82/b4/39/82b439661bcb6e607f182f07d59d1b9d.jpg"
				alt="idol"
				className="w-[200px] h-[200px] mb-1"
			/>
			<div className="w-[240px] h-fit font-medium mb-4">
				<p>{"#" + ssn}</p>
			</div>
			<h1 className="font-semibold text-[20px]">Pranpriya Manobal</h1>
		</Link>
	);
}

export default TraineeCard;
