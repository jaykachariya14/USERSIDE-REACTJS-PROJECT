import { applyMiddleware, compose, createStore } from "redux";
import mainreducer from "./assets/Services/Reducer/Index";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
// import thunk from "react-redux";

import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
const persistConfig = {
    key: 'root',
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, mainreducer)

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    ); 

let persistor = persistStore(store)

export default store

export {persistor}
