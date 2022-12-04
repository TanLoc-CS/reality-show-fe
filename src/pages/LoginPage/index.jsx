import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import AuthController from "../../controller/auth.controller";

function LoginPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		AuthController.signin(username, password);
		navigate("/");
	};

	return (
		<form className="w-[504px] h-[600px] p-[40px] bg-white flex flex-col justify-start items-center border shadow-lg rounded-lg">
			<h1 className="text-[20px] mb-[24px]">Welcome!</h1>
			<Logo />
			<div className="mb-[36px]">
				<p className="text-[16px] pb-[4px]">Username</p>
				<input
					type="text"
					placeholder="Enter your username"
					onChange={(e) => setUsername(e.target.value)}
					className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
				/>
			</div>

			<div className="mb-[20px]">
				<p className="text-[16px] pb-[4px]">Password</p>
				<div className="flex flex-row items-center">
					<input
						type="password"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
						className="w-[424px] h-[60px] px-[16px] text-[16px] border border-black focus-within:outline-none rounded-lg"
					/>
				</div>
			</div>

			<button
				type="button"
				onClick={handleSubmit}
				className="w-[424px] h-[56px] mb-[36px] bg-black hover:bg-indigo-700 active:bg-indigo-900 text-white rounded-lg"
			>
				Login
			</button>
		</form>
	);
}

export default LoginPage;
