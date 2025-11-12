import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  Reducer,
  UnknownAction
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer, { initialState as authInitialState } from './authSlice'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth' /* , 'app', 'user' */],
}

const combinedReducer = combineReducers({
  auth: authReducer,
})

const initialState = {
  auth: authInitialState,
}

export const rootReducer: Reducer = (state: RootState, action: UnknownAction) => {
  if (action.type === 'auth/logout') {
    return combinedReducer({ ...initialState /* app: state.app */ }, action)
  }
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).prepend(listenerMiddleware.middleware),
})

const persistor = persistStore(store)
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type RootState = ReturnType<typeof combinedReducer>
type AppDispatch = typeof store.dispatch

export {
  listenerMiddleware, persistor, store, useAppDispatch,
  useAppSelector, type AppDispatch, type RootState
}

