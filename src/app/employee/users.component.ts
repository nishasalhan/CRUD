import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

export class NewUserInfo {
  name: string;
  address: string;
  email: string;
}

/**
 * @title Stepper overview
 */
@Component({
  templateUrl: 'users.component.html'
})

export class UsersComponent {
  public userData: any;
  model: NewUserInfo = new NewUserInfo();

  title = 'All Users';
  users: NewUserInfo[] = [
    {
      name: 'Nisha',
      address: 'Mohali',
      email: 'nisha@gmail.com',
    },
    {
      name: 'Mona',
      address: 'Chandigarh',
      email: 'mona@gmail.com',
    },
    {
      name: 'Aman',
      address: 'Mohali',
      email: 'aman@gmail.com',
    }
  ];
  /****add new user to list****/
  addNewUser(userData : NewUserInfo){
      this.users.push(userData);
  }
  /****delete user from list****/
  deleteNewUser(user: any){
      const index: number = this.users.indexOf(user);
      this.users.splice(index, 1);
  }

}
