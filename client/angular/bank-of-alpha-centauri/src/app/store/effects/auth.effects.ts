import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { AuthUIActions, AuthAPIActions } from "../actions";
import AuthService from "../../services/auth.service";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.login),
      exhaustMap(action => 
        this.authService.login(action.email, action.password).pipe(
          map(() => AuthAPIActions.loginSuccess()),
          catchError(error => of(AuthAPIActions.loginFailure({error})))
        )
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.logout),
      exhaustMap(action => 
        this.authService.logout(action.email).pipe(
          map(() => AuthAPIActions.logoutSuccess()),
          catchError(error => of(AuthAPIActions.logoutFailure({error})))
        )
      )
    );
  });
}
