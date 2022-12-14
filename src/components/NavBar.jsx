import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthController from "../controller/auth.controller";
import Logo from "./Logo";

function NavBar() {
	const navigate = useNavigate();
	const [pokedex, setPokedex] = useState();
	const [filteredData, setFilteredData] = useState();
	const [searchModal, setSearchModal] = useState("hidden");

	const handleChange = (e) => {
		e.preventDefault();
		const search = e.target.value;
		const newFilter = pokedex.filter(
			(value) => value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
		);
		if (search === "") setFilteredData(pokedex);
		else setFilteredData(newFilter);
	};

	const handleBlur = (e) => {
		e.preventDefault();
		setTimeout(() => setSearchModal("hidden"), 500);
	};

	const handleLogout = () => {
		AuthController.logout();
		navigate("/signin");
	};

	return (
		<div className="w-full h-[80px] bg-indigo-400 flex flex-row justify-start items-center fixed z-10">
			<a href="/">
				<Logo size="mini" />
			</a>
			<form className="md:w-[360px] h-[56px] bg-white rounded-2xl flex flex-col justify-center items-center">
				<input
					type="text"
					placeholder="Search"
					className="w-[300px] h-[36px] outline-hidden bg-white focus:outline-none"
					onChange={(e) => handleChange(e)}
					onFocus={() => setSearchModal("block")}
					onBlur={(e) => handleBlur(e)}
				/>
				<div
					className={
						"md:w-[360px] md:h-[360px] bg-white absolute z-10 top-[72px] shadow-lg rounded-lg overflow-y-scroll flex flex-col justify-start items-center " +
						searchModal
					}
				>
					{filteredData &&
						filteredData.map((pokemon) => (
							<a href={`/pokemon/${pokemon.id}`} key={pokemon.name}>
								<div
									className="md:w-[332px] h-8 hover:bg-poke-lemon-yellow text-left pl-8 text-lg"
									key={pokemon.name}
								>
									{pokemon.name}
								</div>
							</a>
						))}
				</div>
			</form>

			<button
				onClick={handleLogout}
				className="w-[120px] h-[60px] ml-[1080px] font-medium bg-lime-400 hover:bg-lime-600 hover:text-white active:bg-lime-800 rounded-lg shadow-lg"
			>
				Log out
			</button>
		</div>
	);
}

export default NavBar;
