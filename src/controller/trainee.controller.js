import traineeAPI from "../api/traineeAPI";

export const getTrainees = async () => {
	try {
		const result = await traineeAPI.getTrainees();
		if (result.statusText !== "OK") {
			throw result.statusText;
		}
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const getTrainee = async (ssn) => {
	try {
		const result = await traineeAPI.getTrainee(ssn);
		if (result.statusText !== "OK") {
			throw result.statusText;
		}
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const addTrainee = async (
	fname,
	lname,
	ssn,
	addr,
	phone,
	dob,
	company_id,
	photo
) => {
	try {
		const result = await traineeAPI.addTrainee(
			fname,
			lname,
			ssn,
			addr,
			phone,
			dob,
			company_id,
			photo
		);
		if (result.statusText !== "OK") {
			throw result.statusText;
		}
		return result;
	} catch (err) {
		console.log(err);
	}
};
const traineeController = { getTrainees, addTrainee, getTrainee };
export default traineeController;
