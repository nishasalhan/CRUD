import { Injectable } from '@angular/core';

@Injectable()

export class NewUserInfo {
  name: string;
  address: string;
  email: string;
}

export class UsersService {
      showServiceText(){
           return 'Hey! Your service working fine';
      }

      NewUserInfo = [
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
}
