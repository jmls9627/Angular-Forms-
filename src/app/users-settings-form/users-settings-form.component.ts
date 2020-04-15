import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-users-settings-form',
  templateUrl: './users-settings-form.component.html',
  styleUrls: ['./users-settings-form.component.css']
})
export class UsersSettingsFormComponent implements OnInit {

  OriginaluserSettings: IUserSettings = {
    name:null,
    emailOffers:null,
    interfarceStyle:null,
    subscriptionType:null,
    notes:null
  };

  userSettings: IUserSettings ={...this.OriginaluserSettings}//copia de seguridad

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field:NgModel){
    console.log("in onBlur" ,field.valid);
    
  }

  onSubmit(form:NgForm){
   console.log("in onSubmit: ", form.valid); 
  }

  

}
