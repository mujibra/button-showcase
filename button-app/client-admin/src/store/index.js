import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/rootReducer";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
