import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/app/profile/profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(public authService: AuthService, public profService: ProfileService) {}

  ngOnInit(): void {}

  register() {
    this.authService.register({
      avatar: 'https://loganfuneralchapel.com/wp-content/uploads/2017/01/xgeneric-profile-avatar_352864.jpg.pagespeed.ic.tKiXzscPKc.jpg',
      first_name: this.registerForm.value?.first_name ?? '',
      last_name: this.registerForm.value?.last_name ?? '',
      email: this.registerForm.value?.email ?? '',
      password: this.registerForm.value?.password ?? '',
    }).then(x => {
      this.profService.createProfile({
        avatar: 'https://loganfuneralchapel.com/wp-content/uploads/2017/01/xgeneric-profile-avatar_352864.jpg.pagespeed.ic.tKiXzscPKc.jpg',
        first_name: this.registerForm.value?.first_name ?? '',
        last_name: this.registerForm.value?.last_name ?? '',
        username: this.registerForm.value?.username ?? '',
        user_id: this.authService.user?.uid ?? '',
      });
    });
  }
}
