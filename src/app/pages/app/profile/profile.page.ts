import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { ProfileService } from 'src/app/services/app/profile/profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/types/db/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile!: DocumentData;
  constructor(public auth: AuthService, public profService: ProfileService) {}

  ngOnInit() {
    this.profService.getProfile(this.auth.user?.uid ?? "").then(x => {
      this.profile = x.docs[0].data();
    })
  }
}
