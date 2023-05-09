import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.authService.register({
      avatar: '',
      first_name: '',
      last_name: '',
      email: this.registerForm.value?.email ?? '',
      password: this.registerForm.value?.password ?? '',
    });
  }
}
