import { createStore } from "redux";

import reducers from "./reducers";

//Tạo store
const store = createStore(reducers);

export default store;