import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {UsersService} from '../app.service';
/**
 * @title Basic table
 */
@Component({
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
  providers: [UsersService],
})

export class DashboardComponent {
  title = 'Users Details';
  private userData: any;

  constructor(private _usersService: UsersService) {}
  ngOnInit() {
    this.userData = this._usersService.NewUserInfo;
    console.log(this.userData);
  }
  displayedColumns = [ 'name', 'address', 'email'];
  dataSource = new ExampleDataSource();
}

export interface Users {
  name: string;
  address: string;
  email: string;
}

const data: Users[] = [
  {name: 'George C P', address: 'Mohali', email: 'george@gmail.com'},
  {name: 'Satish K H', address:  'Chandigarh', email: 'satish@gmail.com'},
  {name: 'Gopalakrishnan G', address: 'Chandigarh', email: 'gopalakrishnan@gmail.com'},
  {name: 'Nataraj S', address:  'Mohali', email: 'nataraj@gmail.com'},
  {name: 'Leelavathi M R', address: 'Chandigarh', email: 'leelavathi@gmail.com'},
  { name: 'Ananda G', address: 'Mohali', email: 'ananda@gmail.com'},
  {name: 'Jayabharathi S', address:  'Mohali', email: 'jayabharathi@gmail.com'},
];


/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable < Users[] > {
    return Observable.of(data);
  }
  disconnect() {}
}
