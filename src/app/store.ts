import {configureStore} from "@reduxjs/toolkit"; 
import ImageGalaryReducer from "./slices/ImageGalarySlice"
import CategoryReducer from "./slices/CategorySlice"

const store = configureStore({
        reducer: { 
        galary:ImageGalaryReducer,
        category:CategoryReducer,

    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import {configureStore,combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
// import {persistStore,persistReducer} from "redux-persist"
// import storage from "redux-persist/lib/storage";
// import ImageGalaryReducer from "./slices/ImageGalarySlice"

// import {FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE} from "redux-persist/es/constants";


// const rootReducer = combineReducers({
//     galary:ImageGalaryReducer,
// });

// const persistConfig ={
//     key:"root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig,rootReducer);

// const store = configureStore({
//     reducer:persistedReducer,
//     middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
//         serializableCheck:{
//             ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
//         },
//     }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;