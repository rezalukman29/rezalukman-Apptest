import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';


import contactReducer from "../reducers/contactReducer";




const rootReducer = combineReducers({ 

  contacts: contactReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['contacts']
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer, 
 applyMiddleware(thunk)
);
export const persistor = persistStore(store);