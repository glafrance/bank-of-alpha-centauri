import { createReducer, on } from "@ngrx/store";
import { AuthUIActions, AuthAPIActions } from "../actions";

interface AuthState {
  loggedIn: boolean,
  error: string
}

export const initialState: AuthState = {
  loggedIn: false,
  error: ''
};

export const authReducer = createReducer(
  initialState,
  on(AuthAPIActions.loginSuccess, state => {
    return {
      ...state,
      loggedIn: true
    };
  }),
  on(AuthAPIActions.loginFailure, (state, {error}) => {
    return {
      ...state,
      error
    };
  }),
  on(AuthAPIActions.logoutSuccess, state => {
    return {
      ...state,
      loggedIn: false
    };
  }),
  on(AuthAPIActions.logoutFailure, (state, {error}) => {
    return {
      ...state,
      error
    };
  })
);
