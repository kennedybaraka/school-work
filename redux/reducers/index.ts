import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
