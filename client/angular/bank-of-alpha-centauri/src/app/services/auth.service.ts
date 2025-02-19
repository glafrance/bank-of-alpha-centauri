import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { LoginResponse } from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private http = inject(HttpClient);
  baseURL = 'http://localhost:8080';
  baseAPI = 'api/auth';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseURL}/${this.baseAPI}/login`, 
      { email, password },
      { headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  refreshToken(): Observable<{ accessToken: string, refreshToken: string }> {
    const refreshToken = localStorage.getItem('refreshToken');
    
    return this.http.post<{ accessToken: string, refreshToken: string }>(
      `${this.baseURL}/${this.baseAPI}/refresh-token`,
      { refreshToken }
    ).pipe(
      tap(response => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      })
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  // this.http.get('/api/protected-endpoint', httpOptions).subscribe({
  //   next: data => console.log('Protected data:', data),
  //   error: err => {
  //     if (err.status === 401) {
  //       alert('Session expired. Please log in again.');
  //       this.logout();
  //     }
  //   }
  // });
}
