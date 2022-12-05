import React, { useEffect, useState } from "react";

import Logo from "../../../components/Logo";
import TraineeCard from "../../../components/TraineeCard";
import Container from "../../../components/Container";
import traineeController from "../../../controller/trainee.controller";

function Home() {
	const [trainees, setTrainees] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await traineeController.addTrainee(
			event.target.fname.value,
			event.target.lname.value,
			event.target.ssn.value,
			event.target.addr.value,
			event.target.phone.value,
			event.target.dob.value,
			event.target.company_id.value,
			event.target.photo.value
		);

		alert("Save successfully!");
	};

	useEffect(() => {
		traineeController.getTrainees().then((res) => setTrainees(res.data));
	}, []);

	return (
		<div className="w-[1720px] h-fit mt-28 flex flex-col justify-start items-center scrollbar-hide overflow-y-scroll">
			<Logo />
			<div className="w-[1720px] h-fit flex flex-row justify-end items-center">
				<Container onSubmit={handleSubmit} />
			</div>
			<div className="w-[1720px] h-fit flex flex-wrap">
				{trainees &&
					trainees.map((trainee) => (
						<TraineeCard
							fname={trainee.fname}
							lname={trainee.lname}
							ssn={trainee.ssn}
							photo={trainee.photo}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;
