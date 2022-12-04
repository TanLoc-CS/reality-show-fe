import api from "./api";

const TraineeAPI = {
	getTrainees: async () => await api.get("/trainees"),
};

export default TraineeAPI;
