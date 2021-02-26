import { SessionStore } from './session.store';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private store: SessionStore,
              private http: HttpClient) {
  }

  login(email, password): any {
    const auth = { email, password };
    const url = `${environment.apiUrl}/ecom_core/login`;
    return this.http.post<any>(url, { auth, tokenize: false }) 
                .pipe(
                  tap(session => this.store.login(session))
                );
  }

  logout(): void {
    this.store.logout();
  }
}
