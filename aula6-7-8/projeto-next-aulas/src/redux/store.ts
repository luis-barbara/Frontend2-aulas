import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import loggerMiddleware from "./middleware/reduxMiddleware";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Criar storage compatível com Next.js SSR
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage,
}




const persistedCounter = persistReducer(persistConfig, counterReducer); 

export const store = configureStore({
    reducer: {
        counter: persistedCounter,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }).concat(loggerMiddleware),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
