import { createAction, props } from "@ngrx/store";

const AuthUIActionTypes = {
  AuthLogin: '[Auth] Login'
}

export const login = createAction(
  AuthUIActionTypes.AuthLogin,
  props<{ email: string, password: string }>()
);
