import { Store, StoreConfig } from '@datorama/akita';
import { StorageService } from '../../shared/services/storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';


export interface SessionState {
  token: string;
  user: User;
}

export function createInitialState(): SessionState {
  const token = JSON.parse(localStorage.getItem(environment.sessionKey));
  if (token) {
    const jwt = new JwtHelperService();
    const decoded = jwt.decodeToken(token);
    return {
      token,
      user: decoded
     };
  } else {
    return {
      token: null,
      user: null
    };
  }
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor(private service: StorageService) {
    super(createInitialState());
  }

  login(state: SessionState): any {
    this.update(state);
    this.service.save(environment.sessionKey, state.token);
  }

  logout(): void {
    this.service.remove(environment.sessionKey);
    this.update(createInitialState());
  }
}
