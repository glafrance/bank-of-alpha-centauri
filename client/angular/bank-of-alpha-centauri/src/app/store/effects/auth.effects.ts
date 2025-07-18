import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { AuthUIActions, AuthAPIActions } from "../actions";
import AuthService from "../../services/auth.service";
import { of } from "rxjs";
import { LoginResponse } from "../../models/auth.model";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router)

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.login),
      exhaustMap(action => 
        this.authService.login(action.email, action.password).pipe(
          map((response: LoginResponse) => {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            this.authService.setIsLoggedIn(true);
            this.router.navigateByUrl('/accounts');
            return AuthAPIActions.loginSuccess();
          }),
          catchError(error => of(AuthAPIActions.loginFailure({error})))
        )
      )
    );
  });
}
