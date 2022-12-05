import React from "react";
import { Link } from "react-router-dom";

function TraineeCard(props) {
	const { fname, lname, ssn, photo } = props;
	return (
		<Link
			to={"/trainee/" + ssn}
			className="w-[280px] h-[320px] m-8 px-4 py-4 flex flex-col justify-start items-center bg-indigo-50 hover:bg-indigo-100 hover:-translate-y-2 rounded-lg shadow-2xl"
		>
			<img
				src={
					photo != null
						? photo
						: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
				}
				alt="idol"
				className="w-[200px] h-[200px] mb-1"
			/>
			<div className="w-[240px] h-fit font-medium mb-4">
				<p>{"#" + ssn}</p>
			</div>
			<h1 className="font-semibold text-[20px]">{fname + " " + lname}</h1>
		</Link>
	);
}

export default TraineeCard;
