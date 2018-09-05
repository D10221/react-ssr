import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import createStore from "./store";

const store = createStore((window as any).REDUX_DATA);
const jsx = (
    <ReduxProvider store={store}>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>
);
ReactDOM.hydrate(jsx, document.getElementById("app"));
