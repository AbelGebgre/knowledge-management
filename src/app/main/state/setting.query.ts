import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { SettingsStore, SettingState } from "./setting.store";

@Injectable({providedIn: 'root'})
export class SettingsQuery extends QueryEntity<SettingState> {
    constructor(protected store: SettingsStore) {
        super(store);
    }
}