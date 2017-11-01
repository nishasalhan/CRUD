import { Component } from '@angular/core';

@Component({
  templateUrl: `./contact.component.html`,
  styleUrls: ['contact.component.css']
})

export class ContactComponent {
  title = 'Contact Us';
  submitForm(data){
      console.log(data);
  }
}

