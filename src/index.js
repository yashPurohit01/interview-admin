import React from "react";
import ReactDOM from "react-dom";
import store from "./ReduxStore/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/Index.scss";


ReactDOM.render(

  <Provider store={store}>
	<BrowserRouter>
	  <React.StrictMode>
		<App />
	  </React.StrictMode>
	</BrowserRouter>
  </Provider>,
  
  document.getElementById("root")

);
