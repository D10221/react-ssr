import { ComponentType } from "react";
import { RouteProps } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Secret from "./components/Secret";
/** */
export interface RouteDefinition extends RouteProps {

}
/** */
const routes: (RouteProps & { component: ComponentType<any> & { serverFetch?: (...args: any[]) => any } })[] = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        path: "/contact",
        component: Contact,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
]
export default routes;
