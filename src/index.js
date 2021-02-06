import React, { createStore, applyMiddleware } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "react-thunk";

import "./index.css";
import App from "./App";

const reducer = () => {};

const store = createStore(reducer, applyMiddleware(thunk));

const { worker } = require("./mocks/browser");
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.
