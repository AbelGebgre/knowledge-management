import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get(key): void{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }

  save(key, item): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key): void{
    localStorage.removeItem(key);
  }
}
