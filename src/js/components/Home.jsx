import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<>
		<div className="container">
			<div className="d-flex justify-content-center align-item center bg-dark p-4">
				<p className="fs-5 text-white">
					<FontAwesomeIcon className="me-3" icon={faClock}/>
					{props.seconds.toString().padStart(6, "0")}
					</p>
			</div>

		</div>
		</>
	);
};

export default Home;