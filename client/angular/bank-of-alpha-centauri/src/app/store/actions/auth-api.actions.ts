import { createAction, props } from "@ngrx/store";

const AuthAPIActionTypes = {
  AuthLoginSuccess: '[Auth] Login Success',
  AuthLoginFailure: '[Auth] Login Failure',
}

export const loginSuccess = createAction(
  AuthAPIActionTypes.AuthLoginSuccess
);
export const loginFailure = createAction(
  AuthAPIActionTypes.AuthLoginFailure,
  props<{ error: string }>()
);
