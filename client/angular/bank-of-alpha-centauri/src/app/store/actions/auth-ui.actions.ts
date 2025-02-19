import { createAction, props } from "@ngrx/store";

const AuthUIActionTypes = {
  AuthLogin: '[Auth] Login',
  AuthLogout: '[Auth] Logout'
}

export const login = createAction(
  AuthUIActionTypes.AuthLogin,
  props<{ email: string, password: string }>()
);
export const logout = createAction(
  AuthUIActionTypes.AuthLogout,
  props<{ email: string }>()
);
