import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  private post: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  public Users!: User[];

  ngOnInit(): void {
    this.onCreateUser();
    this.onGetUser();
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.table(response);
        this.Users = response;
      },
      (err) => console.log(err),
      () => console.log('Completed getting the Users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (res) => console.table(res),
      (err) => console.log(err),
      () => console.log('Completed getting the User')
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.post).subscribe(
      (res) => console.table(res),
      (err) => console.log(err),
      () => console.log('Completed updating the User')
    );
  }
}
