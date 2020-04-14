import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import{UsersSettingsFormComponent } from './users-settings-form/users-settings-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersSettingsFormComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
