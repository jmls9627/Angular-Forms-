import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';

@Component({
  selector: 'app-users-settings-form',
  templateUrl: './users-settings-form.component.html',
  styleUrls: ['./users-settings-form.component.css']
})
export class UsersSettingsFormComponent implements OnInit {

  OriginaluserSettings: IUserSettings = {
    name:'Jose',
    emailOffers:true,
    interfarceStyle:'dark',
    subscriptionType:'Annual',
    notes:'here are some notes..'
  };

  userSettings: IUserSettings ={...this.OriginaluserSettings}//copia de seguridad

  constructor() { }

  ngOnInit(): void {
  }

}
