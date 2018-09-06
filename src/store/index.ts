import create from "./create";
import { initialize } from "./session";
const isWindow = typeof window !== "undefined";

const store = create(isWindow && (window as any).REDUX_DATA);

if (!isWindow) {
  console.log("Initialize Session");
  store.dispatch(initialize());
}

export default store;
