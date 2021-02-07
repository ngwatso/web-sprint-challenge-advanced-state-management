import {
	START_FETCHING,
	FETCH_SMURFS,
	FETCH_ERROR,
	ADD_SMURF,
	// ADD_SUCCESS,
	// ADD_ERROR,
} from "../actions";

export const initialState = {
	smurfs: [],
	isLoading: false,
	didAddSmurf: false,
	error: "",
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING: {
			return {
				...state,
				isLoading: true,
				error: "",
			};
		}
		case FETCH_SMURFS: {
			return {
				...state,
				smurfs: [...state.smurfs, ...action.payload],
				isLoading: false,
			};
		}
		case FETCH_ERROR: {
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		}
		case ADD_SMURF: {
			return {
				...state,
				didAddSmurf: true,
			};
		}

		default:
			return state;
	}
};

//Task List:
// * 1. Add in the initialState needed to hold:
// *     - an array of smurfs
// *     - a boolean indicating if the app is loading
// *     - error text
// * 2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
// *     - The start of an api call
// *     - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
// *     - Setting Error Text
//      - Any other state changes you see as necessary
