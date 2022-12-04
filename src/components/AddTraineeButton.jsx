import React from "react";
const AddTraineeButton = (props) => {
	const { buttonRef, showModal } = props;
	return (
		<button
			className="w-[120px] h-[60px] mr-[100px] font-medium bg-lime-400 hover:bg-lime-600 hover:text-white active:bg-lime-800 rounded-lg shadow-lg"
			ref={buttonRef}
			onClick={showModal}
		>
			+ Add trainee
		</button>
	);
};
export default AddTraineeButton;
