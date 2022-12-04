import db from "../config/mysql";

db.connect();

const getTrainees = () => {
	const get = () =>
		db.query("SELECT * FROM Trainee", (err, rows, fields) => {
			if (err) throw err;

			console.log("The solution is: ", rows);
		});

	get("SELECT * FROM Trainee", (err, rows, fields) => {
		return rows;
	});
};

db.end();

const traineeModel = { getTrainees };
export default traineeModel;
