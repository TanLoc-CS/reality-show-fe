import React from "react";

export const Form = (props) => {
	const { onSubmit } = props;

	return (
		<form
			onSubmit={onSubmit}
			className="w-[484px] h-fit flex flex-col justify-start items-end"
		>
			<div className="w-[484px] h-fit mb-4 flex flex-row justify-between items-center">
				<div className="w-[232px] h-[82px] p-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
					<label htmlFor="fname">First name</label>
					<input
						className="w-[200px] h-[32px] px-2 border"
						placeholder="Enter trainee first name..."
						id="fname"
						required
					/>
				</div>
				<div className="w-[232px] h-[82px] p-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
					<label htmlFor="lname">Last name</label>
					<input
						className="w-[200px] h-[32px] px-2 border"
						id="lname"
						placeholder="Enter trainee first name..."
						required
					/>
				</div>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="ssn">Social security number</label>
				<input
					className="w-[452px] h-[32px] px-2 border"
					id="ssn"
					placeholder="Enter trainee ssn..."
					required
				/>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="addr">Address</label>
				<input
					className="w-[452px] h-[32px] px-2 border"
					id="addr"
					placeholder="Enter trainee address..."
					required
				/>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="phone">Phone number</label>
				<input
					className="w-[452px] h-[32px] px-2 border"
					id="phone"
					placeholder="Enter trainee phone number..."
					required
				/>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="dob">Date of birth</label>
				<input
					type="datetime-local"
					className="w-[452px] h-[32px] px-2 border"
					id="dob"
					placeholder="Enter trainee date of birth..."
					required
				/>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-4 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="company_id">Company id</label>
				<input
					className="w-[452px] h-[32px] px-2 border"
					id="company_id"
					placeholder="Enter trainee company id..."
					required
				/>
			</div>
			<div className="w-[484px] h-[82px] p-4 mb-5 bg-indigo-50 flex flex-col justify-center items-start rounded-lg shadow-lg">
				<label htmlFor="photo">Photo URL</label>
				<input
					className="w-[452px] h-fit px-2"
					id="photo"
					placeholder="Enter trainee photo url..."
					required
				/>
			</div>

			<button
				className="w-[96px] h-[40px] bg-indigo-400 hover:bg-indigo-600 active:bg-indigo-800 rounded-lg shadow-lg"
				type="submit"
			>
				Save
			</button>
		</form>
	);
};
export default Form;
