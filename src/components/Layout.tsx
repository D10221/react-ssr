import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import { Header } from "./header";

export default class Layout extends React.Component {
    state = {
        title: "Welcome to React SSR!",
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Header />
                <Switch>
                    {routes.map(route => <Route key={route.path} {...route} />)}
                </Switch>
            </div>
        );
    }
}
