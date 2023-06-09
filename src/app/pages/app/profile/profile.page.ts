import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  editEmail = false;
  editLastName = false;
  editFirstName = false;
  editUserName = false;
  profileUUID: string | null = null;

  constructor(public auth: AuthService, public profService: ProfileService) {}

  disableAllEdits() {
    this.editEmail = false;
    this.editLastName = false;
    this.editFirstName = false;
    this.editUserName = false;
  }

  ngOnInit() {
    this.profService.getProfile(this.auth.user?.uid ?? '').then((x) => {
      this.profile = x.docs[0].data();
      this.profileUUID = x.docs[0].id;
    });
  }

  submitChanges(update_field: any, event: Event) {
    this.profService.updateProfile(this.profileUUID || '', {
      [update_field]: (event.target as HTMLInputElement).value,
    });

    this.ngOnInit();
  }
}
