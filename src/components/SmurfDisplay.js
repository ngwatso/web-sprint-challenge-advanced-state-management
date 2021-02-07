import React, { Component } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfData } from "../actions";

// const { smurfs } = this.data;
export class SmurfDisplay extends Component {
	constructor() {
		super();
		this.state = {
			smurfs: this.smurfs,
			isLoading: this.isLoading,
			didAddSmurf: this.didAddSmurf,
			error: this.error,
		};
	}

	// const smurfs = this.props.smurfs

	componentDidMount() {
		// const handleGetData = (e) => {
		// 	e.preventDefault();
		// 	getSmurfData();
		// };

		const smurfVillage = getSmurfData;

		console.log("smurfVillage =====> ", smurfVillage);

		if (this.props.isLoading) {
			return <h2> Fetching data, one moment...</h2>;
		}
	}

	render() {
		console.log("Props =====>", this.props);
		return (
			<div className="smurf-village">
				<h1>Smurf Village</h1>
				{/* <ul>
					{smurfVillage.map((smurf) => {
						return (
							<Smurf
								name={smurf.name}
								position={smurf.position}
								nickname={smurf.nickname}
								description={smurf.description}
								key={smurf.key}
							/>
						);
					})}
				</ul> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
		didAddSmurf: state.didAddSmurf,
		error: state.error,
	};
};

// export default SmurfDisplay;

export default connect(mapStateToProps, { getSmurfData })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
