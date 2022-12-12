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

// import {} from "./reducer";

const rootReducer = combineReducers({
    // reducer add
});

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
