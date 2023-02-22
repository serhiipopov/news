import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/post/slice';
import authReducer from './reducers/auth/slice';
import userReducer from './reducers/users/slice';

const rootReducer = combineReducers({
  postReducer,
  authReducer,
  userReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
