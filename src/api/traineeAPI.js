import api from "./api";

const traineeAPI = {
	getTrainees: async () => await api.get("/trainees"),
	getTrainee: async (ssn) => await api.get(`/trainee/${ssn}`),
	retrieveResult: async (ssn, year) =>
		await api.post("/retrieve", { ssn, year }),
	addTrainee: async (fname, lname, ssn, addr, phone, dob, company_id, photo) =>
		await api.post("/trainee", {
			fname,
			lname,
			ssn,
			addr,
			phone,
			dob,
			company_id,
			photo,
		}),
};

export default traineeAPI;
