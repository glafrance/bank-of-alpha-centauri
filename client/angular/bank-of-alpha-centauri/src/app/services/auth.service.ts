import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<Object> {
    return this.http.post('http://localhost:8080/api/auth/login', 
      { email, password },
      { headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }

  logout(email: string): Observable<Object> {
    return this.http.post('http://localhost:8080/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    });
  }
}
