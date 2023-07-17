import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ thunk }), logger],
});

export const persistor = persistStore(store);




