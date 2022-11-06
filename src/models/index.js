import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./adminF";
import { authReducer } from "./auth";
import { userReducer } from "./users";
export { adminActions } from "./adminF";
export { authActions } from "./auth";
export { userActions } from "./users";



// const rootReducer =  combineReducers({
//   auth:authReducer,
//   admin:adminReducer,
// })

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin:adminReducer,
    user:userReducer
  },
  devTools: true,
});
