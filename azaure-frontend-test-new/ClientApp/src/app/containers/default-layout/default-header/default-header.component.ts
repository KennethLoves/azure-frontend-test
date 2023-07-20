import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HeaderComponent } from '@coreui/angular';

import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  displayName: string;
  userPhoto: any;
  isImageLoaded = false;

  @Input() sidebarId: string = 'sidebar';

  constructor(private _userService: UserService, private readonly _domSanitizer: DomSanitizer) {
    super();
  }

  ngOnInit() {
    this.displayName = this._userService.getUserProfile().displayName;
    // console.log(this._userService.getUserProfile())
    this._userService.getUserPhoto().subscribe(data => {
      const imageData = URL.createObjectURL(data);
      this.userPhoto = this._domSanitizer.bypassSecurityTrustUrl(imageData);
      this.isImageLoaded = true;
    });
  }
}
