import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  // username$ = this.select(state => state.user ? state.user.name : null);
  // role$ = this.select(state => (state.user && state.user.roles.length > 0) ? state.user.roles[0] : '');

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): any {
    return !!(this.getValue().token);
  }

  get token(): any{
    return this.getValue().token;
  }
}
