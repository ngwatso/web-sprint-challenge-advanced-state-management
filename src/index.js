import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import { smurfReducer } from "./reducers";

const { worker } = require("./mocks/browser");
worker.start();

// ?? set up state using createStore (apply middleWare used for thunk)
const store = createStore(smurfReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

// ?? Wrap App in Provider, use store for props
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

// * Task List:
// * 1. Add in all necessary components and libary methods.
// * 2. Create a store that includes thunk middleware support.
// * 3. Wrap the App component in a react-redux Provider element.
