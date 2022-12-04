import React from "react";

import Logo from "../../../components/Logo";
import ResultRetrieved from "../../../components/ResultRetrieved";

function Trainee() {
	return (
		<div className="w-[1720px] h-fit mt-28 flex flex-col justify-start items-center scrollbar-hide overflow-y-scroll">
			<Logo />

			<div className="w-[1640px] h-fit mt-5 flex flex-row justify-between items-center">
				<div className="w-[560px] h-[640px] bg-lime-100 p-5 rounded-lg shadow-lg">
					<img
						src="https://img.meta.com.vn/Data/image/2021/10/12/hinh-anh-lisa-blackpink-13.jpg"
						alt=""
						className="w-[520px] h-[600px]"
					/>
				</div>
				<div className="w-[960px] h-[640px] bg-lime-100 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center">
					<div className="w-[800px] h-[600px] flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide">
						<div className="w-full h-[48px] mb-4 flex flex-row justify-between items-center">
							<div className="w-[280px] h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
								<h1 className="text-[20px]">{"First name: "}</h1>
								<p className="text-[20px]">Onii-chan</p>
							</div>
							<div className="w-[280px] h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
								<h1 className="text-[20px]">{"Last name: "}</h1>
								<p className="text-[20px]">Baka</p>
							</div>
						</div>
						<div className="w-full h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
							<h1 className="text-[20px]">{"Social security number: "}</h1>
							<p className="text-[20px]">123123123123</p>
						</div>
						<div className="w-full h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
							<h1 className="text-[20px]">{"Address: "}</h1>
							<p className="text-[20px]">Address: 123 Nguyen Van Linh, HCM</p>
						</div>
						<div className="w-full h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
							<h1 className="text-[20px]">
								{"Number of seasons participating: "}
							</h1>
							<p className="text-[20px]">2</p>
						</div>
						<div className="w-full h-[48px] px-4 mb-4 bg-indigo-100 flex flex-row justify-between items-center rounded-lg ">
							<h1 className="text-[20px]">{"Best achievement: "}</h1>
							<p className="text-[20px]">250</p>
						</div>
						<ResultRetrieved />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trainee;
