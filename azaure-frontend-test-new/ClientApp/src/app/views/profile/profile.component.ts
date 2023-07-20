import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';
import { ProfileInformation } from 'app/interfaces/profile-information';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: ProfileInformation;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUserInformation().subscribe(data => {
      this.profile = data;
    });
  }
}
