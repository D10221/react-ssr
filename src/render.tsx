import { RequestHandler } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import { Provider as ReduxProvider } from "react-redux";
import { matchPath, StaticRouter } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import createStore, { initializeSession } from "./store";
import htmlTemplate from "./html-template";

const render: RequestHandler = async (req, res) => {

    const context = {};
    const store = createStore();
    store.dispatch(initializeSession());

    const dataRequirements =
        routes
            .filter(route => matchPath(req.url, route)) // filter matching paths
            .map(route => route.component) // map to components
            .filter(comp => !!comp.serverFetch) // check if components have data requirement
            .map(comp => comp.serverFetch && store.dispatch(comp.serverFetch())); // dispatch data requirement

    await Promise.all(dataRequirements);
    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={req.url}>
                <Layout />
            </StaticRouter>
        </ReduxProvider>
    );
    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
}
export default render;