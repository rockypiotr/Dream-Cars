import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loading!: boolean;

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    if (this.email === '')
      alert('Please enter email;');

    if (this.password === '')
      alert('Please enter password');

    this.auth.login(this.email.toLowerCase(), this.password);
    this.email = '';
    this.password = '';
  }
}
