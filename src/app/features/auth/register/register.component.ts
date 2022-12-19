import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.email === '')
      alert('Please enter email;');

    if (this.password === '')
      alert('Please enter password');

    this.auth.register(this.email.toLowerCase(), this.password);
    this.email = '';
    this.password = '';
  }
}
