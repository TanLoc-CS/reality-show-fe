import React, { useEffect } from "react";

import Logo from "../../../components/Logo";
import TraineeCard from "../../../components/TraineeCard";
import Container from "../../../components/Container";
import traineeController from "../../../controller/trainee.controller";

function Home() {
	const handleSubmit = (event) => {
		event.preventDefault(event);
		console.log(event.target.fname.value);
		console.log(event.target.lname.value);
		console.log(event.target.ssn);
		console.log(event.target.addr.value);
		console.log(event.target.phone.value);
		console.log(event.target.dob.value);
		console.log(event.target.company_id.value);
		console.log(event.target.photo.value);
		alert("Save successfully!");
	};

	// useEffect(() => {
	// 	traineeController.getTrainees().then((res) => console.log(res));
	// }, []);
	traineeController.getTrainees().then((res) => console.log(res));

	return (
		<div className="w-[1720px] h-fit mt-28 flex flex-col justify-start items-center scrollbar-hide overflow-y-scroll">
			<Logo />
			<div className="w-[1720px] h-fit flex flex-row justify-end items-center">
				<Container onSubmit={handleSubmit} />
			</div>
			<div className="w-[1720px] h-fit flex flex-wrap">
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
				<TraineeCard />
			</div>
		</div>
	);
}

export default Home;
