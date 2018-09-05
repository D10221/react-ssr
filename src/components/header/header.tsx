import React, { StatelessComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
if (typeof window !== "undefined") {
    require("./header.css");
}
const Header: StatelessComponent<{ loggedIn: boolean }> = ({ loggedIn }) => (
    <div className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        {loggedIn && <Link className="link" to="/secret">Secret</Link>}
    </div>
);

const mapStateToProps = (state: { [key: string]: any }) => ({
    loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header);
