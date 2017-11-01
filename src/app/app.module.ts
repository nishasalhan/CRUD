import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSliderModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {MdButtonModule} from '@angular2-material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContactComponent} from './contact/contact.component';
import {HelpComponent} from './help/help.component';
import {NguiMapModule} from '@ngui/map';
import {UsersComponent} from './employee/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MdButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBsTbkZm5uSy-DDoUvKX3EP6SuDDn-aOEs'}),
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'contact',
        component: ContactComponent
      }, {
        path: 'help',
        component: HelpComponent
      }, {
        path: 'users',
        component: UsersComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    ContactComponent,
    HelpComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
