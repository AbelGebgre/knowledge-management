import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Setting } from '../models/setting.model';

export interface SettingState extends EntityState<Setting, string> {}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'setting'})
export class SettingsStore extends EntityStore<SettingState> {
    constructor() {
        super();
    }
}