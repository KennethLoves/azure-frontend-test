import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from 'app/views/profile/profile-routing.module';
import { ProfileComponent } from 'app/views/profile/profile.component';

@NgModule({
  imports: [ProfileRoutingModule, CommonModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
