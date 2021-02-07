import React from "react";

class Smurf extends React.Component {
	render() {
		const { smurf } = this.props;

		return (
			<div data-testid="smurf" className="card">
				return (
				<div className="smurf-card">
					<h2> {smurf.name}</h2>
					<h3>{smurf.position}</h3>
					<h3>{smurf.nickname}</h3>
					<h3>{smurf.description}</h3>
				</div>
				)
				{/* {smurf.map((smurf) => {
					return (
						<div key={smurf.id} className="smurf-container">
							<div className="smurf-name">
								{smurf.name}
							</div>

							<div className="smurf-position">
								{smurf.position}
							</div>

							<div className="smurf-nickname">
								{smurf.nickname}
							</div>

							<div className="smurf-description">
								{smurf.description}
							</div>
						</div>
					);
				})} */}
			</div>
		);
	}
}

export default Smurf;

//Task List:
// * 1. Access smurf to be displayed through props.
// * 2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
// * 4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
