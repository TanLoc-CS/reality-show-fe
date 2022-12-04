import userModel from "../model/user.model";

const signin = async (username, password) => {
	try {
		if (username !== userModel.username || password !== userModel.password) {
			throw Error("Invalid username or password");
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
