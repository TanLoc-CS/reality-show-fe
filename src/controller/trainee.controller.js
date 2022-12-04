import traineeModel from "../model/trainee.model";

export const getTrainees = () => {
	try {
		const result = traineeModel.getTrainees();
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
