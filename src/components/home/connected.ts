import { createSelector } from "reselect";
import { connect } from "react-redux";
import * as dataStore from "../../store/data";
import Home from "./Home";

const selector = createSelector(dataStore.selector, circuits => ({ circuits }));

export default connect(
  selector,
  dataStore.bindActions
)(Home);
