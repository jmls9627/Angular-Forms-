import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { DataService } from '../data/data.service';
import { IUserSettings } from '../data/user-settings';
import { Observable } from 'rxjs';

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
  postError:boolean=false;
  postErrorMessage:string="";
  subscriptionTypes:Observable<string[]>;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes=this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel){
    console.log("in onBlur" ,field.valid);
    
  }

  onHttpError(errorResponse:any){
    console.log("Error: ",errorResponse);
    this.postError=true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
   console.log("in onSubmit: ", form.valid);

   if(form.valid){ 
   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
     result=> console.log('success: ', result),
     error=>this.onHttpError(error)
     );
  }
  else{
    this.postError=true;
    this.postErrorMessage="please fix the above errors"
  }
  }
}
  

