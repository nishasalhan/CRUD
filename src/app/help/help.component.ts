import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

export class Test {
  id: number;
  name: string;
  test: string;
}

export class Nisha {
  name: string;
  age: number;
  address: string;
  activity: string;
}

@Component({
  templateUrl: `./help.component.html`
})

export class HelpComponent {
  loc: string;
  showJson: boolean = false;
  showJsonBtn: boolean = true;

  constructor(public snackBar: MatSnackBar) {
  }

  title = 'Ignore Its Dummy Testing';
  test: Test = {
    id: 1,
    name: 'Windstorm',
    test: 'ignore its testing'
  };
  nisha: Nisha = {
    age: 26,
    name: 'Nisha',
    address: 'Mohali phase 7',
    activity: 'Dance'
  }

  /*function call on btn click -> Show snack-bar*/
  openSnackBar(fullname: string, activity: string) {
    this.snackBar.open(fullname, activity, {
      duration: 3000,
    });
  }

  /*function call on btn click -> click me*/
  funClickMe(name: string, address: string) {
    this.loc = name + ' lives in ' + address;
    console.log(this.loc);
  }

  /*function call on btn click -> Show Json Data*/
  funShowJson() {
    this.showJson = true;
    this.showJsonBtn = false;
  }

  /*function call on btn click -> Show Json Data*/
  funHideJson() {
    this.showJson = false;
    this.showJsonBtn = true;
  }

  /*on key enter get input value*/
  value = '';

  onEnter(value: string) {
    this.value = value;
  }
  employees = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  /*add new employee*/
  addEmployee(newEmp: string) {
      if(newEmp){
          this.employees.push(newEmp);
      }
  }
}
