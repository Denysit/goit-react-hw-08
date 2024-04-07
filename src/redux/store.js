import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from './filters/slice';
import { authReducer } from "./auth/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const AuthPersistConfig = {
    key: 'AuthSlice',
    storage,
    whitelist: ["token"],
};

const AuthPersistedReducer = persistReducer(AuthPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: AuthPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);