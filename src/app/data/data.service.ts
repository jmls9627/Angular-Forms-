import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  getSubscriptionTypes():Observable<string[]>{
    return of(['Monthly','Annual','LifeTime']);
  }

  postUserSettingsForm <IUserSettings>(userSettings:IUserSettings) : Observable<any> {
   
  return this.http.post('https://putsreq.com/ykxuDMzjoefAHiiuckjj',userSettings);
    // return of(userSettings);
  }


}
