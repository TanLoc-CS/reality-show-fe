import TraineeAPI from "../services/trainee.service";

export const getTrainees = async () => {
	try {
		const result = await TraineeAPI.getTrainees();
		if (result.statusText !== "OK") {
			throw result.statusText;
		}
		return result;
	} catch (err) {
		console.log(err);
	}
};

const traineeController = { getTrainees };
export default traineeController;
