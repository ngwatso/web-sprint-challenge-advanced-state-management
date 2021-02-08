import React, { Component } from "react";
import { connect } from "react-redux";
// import { Route } from "react-router-dom";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
import axios from "axios";
import { getSmurfData } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

axios.get("http://localhost:3333/smurfs").then((res) =>
	console.log("Smurf Data =====> ", res.data)
);
class App extends Component {
	componentDidMount() {
		console.log(getSmurfData);
		return getSmurfData();
	}

	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-primary">
					<a className="navbar-brand">Smurf Village Database</a>
				</nav>
				<main>
					<AddForm />
					<SmurfDisplay smurfs={this.smurfs} />
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("App.js state =====>", state);
	return {
		smurfs: state.smurfs,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getSmurfData })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
