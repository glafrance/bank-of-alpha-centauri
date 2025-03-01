import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";

import { AuthUIActions } from "../../store/actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export default class LoginFormComponent {
  loginForm: FormGroup;
  isRegistering = false;

  constructor(
    private fb: FormBuilder, 
    private store: Store
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(16),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,16}$/)
      ]],
      passwordConfirm: ['']
    }, { validators: this.matchPasswords.bind(this) });
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;
    const passwordsDoNotMatch = this.isRegistering && password !== passwordConfirm ? { passwordsMismatch: true } : null;
    return passwordsDoNotMatch;
  }

  toggleRegistering() {
    this.isRegistering = !this.isRegistering;
    if (this.isRegistering) {
      this.loginForm.get('passwordConfirm')?.setValidators([Validators.required]);
    } else {
      this.loginForm.get('passwordConfirm')?.clearValidators();
      this.loginForm.get('passwordConfirm')?.setValue('');
    }
    this.loginForm.get('passwordConfirm')?.updateValueAndValidity();
    this.loginForm.updateValueAndValidity();
  }

  submitForm() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (this.isRegistering) {
        // TODO add code throughout app for registering new user
        // this.store.dispatch(
        //   AuthUIActions.login(
        //     { 
        //       email: formData.get('email'), 
        //       password: formData.get('password')
        //     }
        //   )
        // );
      } else {
        this.store.dispatch(
          AuthUIActions.login(
            { 
              email, 
              password
            }
          )
        );
      }
    }
  }
}
