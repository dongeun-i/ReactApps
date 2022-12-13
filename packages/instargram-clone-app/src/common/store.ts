import {
    createStore,
    applyMiddleware,
    Store,
    Action,
    combineReducers,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const rootReducer = combineReducers({});

export type reducerState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: "HDC",
    storage: storage,
    whitelist: ["user", "components"],
};

function configureStore() {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        applyMiddleware(thunkMiddleware)
    );
    return store;
}

export const store = configureStore();
export const persistor = persistStore(store);
