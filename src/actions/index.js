import axios from "axios";

// ?? Fetch smurf data
export const START_FETCHING = "START_FETCHING";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_ERROR = "FETCH_ERROR";

// ?? Post smurf data
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";

export const getSmurfData = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCHING });

		// ?? Fetch smurf data using axios
		axios.get(`http://localhost:3333/smurfs`)
			.then((res) => {
				console.log("Smurf data pulled from API =====> ", res);
				dispatch({ type: FETCH_SMURFS, payload: res.data });
			})
			.catch((err) => {
				console.error("ERROR PULLING DATA", err.message);
				dispatch({ type: FETCH_ERROR, payload: err.message });
			});
	};
};

export const addNewSmurf = (smurf) => {
	return (dispatch) => {
		dispatch({ type: ADD_SMURF });

		// ?? Post smurf data using axios
		axios.post(`http://localhost:3333/smurfs`, smurf)
			.then((res) => {
				console.log("ADD_SUCCESS: ", smurf);
				dispatch({ type: ADD_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				console.error("ERROR SENDING DATA", err.message);
				dispatch({ type: ADD_ERROR, payload: err.message });
			});
	};
};
//Task List:
// * 1. Add fetch smurfs action:
// *             - fetch and return initial list of smurfs
// *             - dispatch actions that indicate if we are waiting for a server response
// *             - dispatch an error text action if an error is returned from the server
//  2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
// *             - send a post request with the smurf as body to see if there is an error
// *             - dispatch add smurf action if request is successful
// *             - dispatch an error text action if an request returns an error
// * 3. Add set error text action:
// *             - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
