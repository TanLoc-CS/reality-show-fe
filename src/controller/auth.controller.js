import AuthAPI from "../services/auth.service";

const signin = async (username, password) => {
	try {
		const result = await AuthAPI.login(username, password);
		if (result.statusText !== "OK") {
			throw result.statusText;
		}
		localStorage.setItem("isAuthenticated", true);
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => {
	localStorage.removeItem("isAuthenticated");
};

const AuthController = { signin, logout };
export default AuthController;
