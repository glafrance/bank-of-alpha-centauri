import { createAction, props } from "@ngrx/store";

const AuthAPIActionTypes = {
  AuthLoginSuccess: '[Auth] Login Success',
  AuthLoginFailure: '[Auth] Login Failure',
  AuthLogoutSuccess: '[Auth] Logout Success',
  AuthLogoutFailure: '[Auth] Logout Failure'
}

export const loginSuccess = createAction(
  AuthAPIActionTypes.AuthLoginSuccess
);
export const loginFailure = createAction(
  AuthAPIActionTypes.AuthLoginFailure,
  props<{ error: string }>()
);
export const logoutSuccess = createAction(
  AuthAPIActionTypes.AuthLogoutSuccess
);
export const logoutFailure = createAction(
  AuthAPIActionTypes.AuthLogoutFailure,
  props<{ error: string }>()
);
