import api from "./api";

const AuthAPI = {
	login: async (username, password) =>
		await api.post("/auth/signin", { username, password }),
};

export default AuthAPI;
